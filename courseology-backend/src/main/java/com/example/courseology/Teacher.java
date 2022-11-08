package com.example.courseology;

import javax.persistence.*;

@Entity
public class Teacher {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    private String name;
    private String mainSubject;
    private String secondarySubject;
    private String background;
    private String profilePicture;

    public Teacher() {

    }

    public Teacher(int id, String name, String mainSubject, String secondarySubject, String background, String profilePicture) {
        this.id = id;
        this.name = name;
        this.mainSubject = mainSubject;
        this.secondarySubject = secondarySubject;
        this.background = background;
        this.profilePicture = profilePicture;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getMainSubject() {
        return mainSubject;
    }

    public void setMainSubject(String mainSubject) {
        this.mainSubject = mainSubject;
    }

    public String getSecondarySubject() {
        return secondarySubject;
    }

    public void setSecondarySubject(String secondarySubject) {
        this.secondarySubject = secondarySubject;
    }

    public String getBackground() {
        return background;
    }

    public void setBackground(String background) {
        this.background = background;
    }

    public String getProfilePicture() {
        return profilePicture;
    }

    public void setProfilePicture(String profilePicture) {
        this.profilePicture = profilePicture;
    }
}
