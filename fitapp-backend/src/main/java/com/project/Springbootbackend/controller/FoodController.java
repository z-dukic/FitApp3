package com.project.Springbootbackend.controller;

import com.project.Springbootbackend.model.Food;
import com.project.Springbootbackend.repository.FoodRepository;
import com.project.Springbootbackend.util.ResourceNotFoundException;
import org.apache.coyote.Response;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

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

    //add food
    //Request body json -> object params
    @PostMapping("/food")
    public Food createFood(@RequestBody Food food){
        return foodRepository.save(food);
    }

    //get food by id
    //path variable means {id} is bound to url hence {id}
    //Response entity is used when your response is based on business logic (like adding id)
    @GetMapping("/food/{id}")
    public ResponseEntity<Food> getFoodById(@PathVariable Long id){
        Food food = foodRepository.findById(id).orElseThrow(() -> new ResourceNotFoundException("Food not found with id: " + id));

        return ResponseEntity.ok(food);
    }

    @PutMapping("/food/{id}")
    public ResponseEntity<Food> updateFood(@PathVariable Long id, @RequestBody Food foodDetails){
        Food food = foodRepository.findById(id).orElseThrow(() -> new ResourceNotFoundException("Food not found with id: " + id));

        food.setFoodName(foodDetails.getFoodName());
        food.setFoodKcal(foodDetails.getFoodKcal());
        food.setFoodProtein(foodDetails.getFoodProtein());
        food.setFoodCarb(foodDetails.getFoodCarb());
        food.setFoodFat(foodDetails.getFoodFat());

        Food updatedFood = foodRepository.save(food);

        return ResponseEntity.ok(updatedFood);
    }

    @DeleteMapping("/food/{id}")
    public ResponseEntity<Map<String, Boolean>> deleteFood(@PathVariable Long id){
        Food food = foodRepository.findById(id).orElseThrow(() -> new ResourceNotFoundException("Food not found with id: " + id));

        foodRepository.delete(food);
        Map<String, Boolean> response = new HashMap<>();
        response.put("deleted", Boolean.TRUE);
        return ResponseEntity.ok(response);
    }









}

