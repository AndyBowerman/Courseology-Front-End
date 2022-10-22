package com.example.courseology;

public class CourseNotFoundException extends RuntimeException {
    public CourseNotFoundException(String target) { super(target + " not found"); }
}
