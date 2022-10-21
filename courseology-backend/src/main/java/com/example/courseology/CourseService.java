package com.example.courseology;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.List;
import java.util.stream.Collectors;

@Service
public class CourseService {
    @Autowired
    CourseRepository courseRepository;
    public void addCourse(Course course) {
        courseRepository.save(course);
    }

    public List<Course> getCourseByCourseName(String courseName) {
        return courseRepository
                .findAll()
                .stream()
                .filter(course -> course.getCourseName().contains(courseName))
                .collect(Collectors.toList());
    }

    public List<Course> getAllCourses() {
        return courseRepository.findAll();
    }

    public List<Course> getCourseByDuration(int duration) {
        return courseRepository
                .findAll()
                .stream()
                .filter(course -> course.getDuration() <= duration)
                .collect(Collectors.toList());
    }

    public List<Course> getCourseByPrice(int price) {
        return courseRepository
                .findAll()
                .stream()
                .filter(course -> course.getPrice() <= price)
                .collect(Collectors.toList());
    }

    public void updateCourse(Course newCourse, int id) {
        if(!courseRepository.existsById(id)) {
            throw new CourseNotFoundException();
        }
        courseRepository.save(newCourse);
    }

    @Transactional
    public void deleteCourseById(int id) {
        if(!courseRepository.existsById(id)) {
            throw new CourseNotFoundException();
        }
        courseRepository.deleteById(id);
    }
}
