package com.eventmate.controller;

import com.eventmate.model.Event;
import com.eventmate.service.EventService;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/events")
@CrossOrigin(origins = "${frontend.origin:http://localhost:5173}")
public class EventController {

    @Autowired
    private EventService eventService;

    @PostMapping("/create")
    public ResponseEntity<Event> createEvent(@Valid @RequestBody Event event) {
        Event saved = eventService.createEvent(event);
        return ResponseEntity.ok(saved);
    }

    @GetMapping("/list")
    public List<Event> listEvents() {
        return eventService.getAllEvents();
    }

    @GetMapping("/{id}")
    public ResponseEntity<Event> getEvent(@PathVariable Long id) {
        Optional<Event> ev = eventService.getAllEvents().stream().filter(e -> e.getId().equals(id)).findFirst();
        return ev.map(ResponseEntity::ok).orElseGet(() -> ResponseEntity.notFound().build());
    }

    @PostMapping("/ai-suggest")
    public ResponseEntity<String> suggest(@RequestBody Event event) {
        String suggestion = eventService.suggestBestSchedule(event);
        return ResponseEntity.ok(suggestion);
    }
}
