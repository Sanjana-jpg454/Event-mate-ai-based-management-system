package com.eventmate.service;

import com.eventmate.model.Event;
import com.eventmate.repository.EventRepository;
import org.springframework.ai.client.AiClient;
import org.springframework.ai.model.GenerationResponse;
import org.springframework.ai.model.Rating;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Map;

@Service
public class EventService {

    @Autowired
    private EventRepository eventRepository;

    @Autowired(required = false)
    private AiClient aiClient;

    public Event createEvent(Event event) {
        return eventRepository.save(event);
    }

    public List<Event> getAllEvents() {
        return eventRepository.findAll();
    }

    // A simple AI suggestion wrapper. If AiClient is not configured, returns a helpful default.
    public String suggestBestSchedule(Event event) {
        if (aiClient == null) {
            return "AI not configured. Suggested: pick a weekday between 10:00-16:00 by consensus.";
        }

        String prompt = String.format("""You are an AI assistant that suggests best scheduling times and short agenda for an event.
Title: %s
Participants: %s
Location: %s
Provide: 1) Suggested best time slots (3 options) 2) Short 3-line agenda.""", 
                event.getTitle(), event.getParticipants(), event.getLocation());

        // Create a simple request (using Spring AI high-level client)
        GenerationResponse response = aiClient.generate(prompt);
        return response.getText();
    }
}
