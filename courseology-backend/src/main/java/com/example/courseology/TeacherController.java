package com.example.courseology;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.transaction.Transactional;
import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
public class TeacherController {

    @Autowired
    TeacherService teacherService;

    @ExceptionHandler
    public ResponseEntity<String> handleException(TeacherNotFoundException exception) {
        return ResponseEntity.status(HttpStatus.NOT_FOUND).body(exception.getMessage());
    }

    // Create

    @PostMapping("/teacher")
    public ResponseEntity<Teacher> createTeacher(@RequestBody Teacher teacher) {
        teacherService.addTeacher(teacher);
        return ResponseEntity.status(HttpStatus.CREATED).body(teacher);
    }

    // Read

    @GetMapping("/teachers")
    public ResponseEntity<List<Teacher>> getTeachers() {
        return ResponseEntity.status(HttpStatus.OK).body(teacherService.getAllTeachers());
    }

    @GetMapping("/teachers/mainSubject")
    public ResponseEntity<List<Teacher>> getTeacherByMainSubject(@RequestParam(required = true) String mainSubject) {
        return ResponseEntity.status(HttpStatus.OK).body(teacherService.getTeacherByMainSubject(mainSubject));
    }

    @GetMapping("/teachers/secondarySubject")
    public ResponseEntity<List<Teacher>> getTeacherBySecondarySubject(@RequestParam(required = true) String secondarySubject) {
        return ResponseEntity.status(HttpStatus.OK).body(teacherService.getTeacherBySecondarySubject(secondarySubject));
    }

    @GetMapping("/teacher/{id}")
    public ResponseEntity<Teacher> getTeacherById(@PathVariable int id) {
        return ResponseEntity.status(HttpStatus.OK).body(teacherService.getTeacherById(id));
    }

    // Update

    @PutMapping("/teacher/{id}")
    public ResponseEntity<Teacher> updateCourse(@RequestBody Teacher newTeacher, @PathVariable int id) {
        newTeacher.setId(id);
        teacherService.updateTeacher(newTeacher, id);
        return ResponseEntity.status(HttpStatus.NO_CONTENT).body(newTeacher);
    }

    // Delete

    @DeleteMapping("/teacher/{id}")
    @Transactional
    public ResponseEntity<Void> deleteTeacherById(@PathVariable int id) {
        teacherService.deleteTeacherById(id);
        return ResponseEntity.status(HttpStatus.NO_CONTENT).build();
    }
}
