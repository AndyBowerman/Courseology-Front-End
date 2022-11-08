package com.example.courseology;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.List;

@Service
public class TeacherService {
    @Autowired
    TeacherRepository teacherRepository;
    public void addTeacher(Teacher teacher) {
        teacherRepository.save(teacher);
    }

    public List<Teacher> getAllCourses() {
        return teacherRepository.findAll();
    }

    public void updateTeacher(Teacher newTeacher, int id) {
        if(!teacherRepository.existsById(id)) {
            throw new TeacherNotFoundException();
        }
        teacherRepository.save(newTeacher);
    }

    @Transactional
    public void deleteTeacherById(int id) {
        if(!teacherRepository.existsById(id)) {
            throw new TeacherNotFoundException();
        }
        teacherRepository.deleteById(id);
    }
}
