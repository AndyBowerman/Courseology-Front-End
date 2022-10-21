package com.example.courseology;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class CourseService {
    @Autowired
    CourseRepository courseRepository;
    public void addCourse(Course course) {
        courseRepository.save(course);
    }
}
