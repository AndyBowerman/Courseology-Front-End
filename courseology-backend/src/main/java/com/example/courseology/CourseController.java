package com.example.courseology;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.transaction.Transactional;
import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
public class CourseController {

    @Autowired
    CourseService courseService;

    // CREATE

    @PostMapping("/course")
    public ResponseEntity<Course> createCourse(@RequestBody Course course) {
        courseService.addCourse(course);
        return ResponseEntity.status(HttpStatus.CREATED).body(course);
    }

    // READ

    // get all courses & by search term

    @GetMapping("/courses")
    public ResponseEntity<List<Course>> getCourses(@RequestParam(required = false) String courseName) {
        if(courseName != null) {
            return ResponseEntity.status(HttpStatus.OK).body(courseService.getCourseByCourseName(courseName));
        }
        return ResponseEntity.status(HttpStatus.OK).body(courseService.getAllCourses());
    }

    // get course by duration

    @GetMapping("/courses/duration")
    public ResponseEntity<List<Course>> getCourseByDuration(@RequestParam int duration) {
        return ResponseEntity.status(HttpStatus.OK).body(courseService.getCourseByDuration(duration));
    }

    // get course by price

    @GetMapping("courses/price")
    public ResponseEntity<List<Course>> getCourseByPrice(@RequestParam int price) {
        return ResponseEntity.status(HttpStatus.OK).body(courseService.getCourseByPrice(price));
    }

    // UPDATE

    @PutMapping("/course/{id}")
    public ResponseEntity<Course> updateCourse(@RequestBody Course newCourse, @PathVariable int id) {
        newCourse.setId(id);
        courseService.updateCourse(newCourse, id);
        return ResponseEntity.status(HttpStatus.NO_CONTENT).body(newCourse);
    }

    // DELETE
    @DeleteMapping("/course/{id}")
    @Transactional
    public ResponseEntity<Void> deleteCourseById(@PathVariable int id) {
        courseService.deleteCourseById(id);
        return ResponseEntity.status(HttpStatus.NO_CONTENT).build();
    }
}
