package com.example.courseology;

public class TeacherNotFoundException extends RuntimeException {
    public TeacherNotFoundException() {
        super("Teacher has not been found");
    }
}
