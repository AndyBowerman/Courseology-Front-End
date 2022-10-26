package com.example.courseology;

import org.hibernate.mapping.ToOne;

import javax.persistence.*;
import java.util.List;

@Entity
public class Course {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    private String img;
    private String courseName;
    private String courseDescription;
    private int duration; // in weeks
    private int price;
    private boolean shortCourse;
//    @OneToMany
//    @JoinColumn(name = "course_lead_id")
//    private Teacher courseLead;
//    private List<Teacher> supportStaff;
//
//    public Teacher getCourseLead() {
//        return courseLead;
//    }
//
//    public void setCourseLead(Teacher courseLead) {
//        this.courseLead = courseLead;
//    }

    public Course() {

    }

    public Course(int id, String img, String courseName, String courseDescription, int duration, int price, boolean shortCourse) {
        this.id = id;
        this.img = img;
        this.courseName = courseName;
        this.courseDescription = courseDescription;
        this.duration = duration;
        this.price = price;
        this.shortCourse = shortCourse;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getImg() {
        return img;
    }

    public void setImg(String img) {
        this.img = img;
    }

    public String getCourseName() {
        return courseName;
    }

    public void setCourseName(String courseName) {
        this.courseName = courseName;
    }

    public String getCourseDescription() {
        return courseDescription;
    }

    public void setCourseDescription(String courseDescription) {
        this.courseDescription = courseDescription;
    }

    public int getDuration() {
        return duration;
    }

    public void setDuration(int duration) {
        this.duration = duration;
    }

    public int getPrice() {
        return price;
    }

    public void setPrice(int price) {
        this.price = price;
    }

    public boolean isShortCourse() {
        return shortCourse;
    }

    public void setShortCourse(boolean shortCourse) {
        this.shortCourse = shortCourse;
    }
}
