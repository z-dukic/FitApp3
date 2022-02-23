package com.project.Springbootbackend.controller;

import com.project.Springbootbackend.model.Food;
import com.project.Springbootbackend.repository.FoodRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api/v1/")
public class FoodController {

    @Autowired
    private FoodRepository foodRepository;

    //list all food
    @GetMapping("/food")
    public List<Food> getAllFood(){
        return foodRepository.findAll();
    }

    @PostMapping("/addFood")
    public Food addFood(@RequestBody Food food){
        return foodRepository.save(food);
    }








}

