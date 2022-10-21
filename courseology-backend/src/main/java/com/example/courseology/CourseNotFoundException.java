package com.example.courseology;

public class CourseNotFoundException extends RuntimeException {
    public CourseNotFoundException() { super("Course has not been found"); }
}
