package com.example.courseology;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface TeacherRepository extends JpaRepository<Teacher, Integer> {
    List<Teacher> getAllByMainSubject(String mainSubject);

    List<Teacher> getAllBySecondarySubject(String secondarySubject);
}
