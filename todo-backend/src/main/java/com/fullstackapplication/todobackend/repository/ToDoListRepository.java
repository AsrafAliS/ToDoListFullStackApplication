package com.fullstackapplication.todobackend.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.fullstackapplication.todobackend.model.ToDoList;

public interface ToDoListRepository extends JpaRepository<ToDoList, Long> {
    // You can add custom query methods here if needed
}

