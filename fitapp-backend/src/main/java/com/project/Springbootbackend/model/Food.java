package com.project.Springbootbackend.model;

import javax.persistence.*;
import javax.persistence.Entity;

@Entity
public class Food extends EntityId {

    @Column(name = "food_name")
    private String foodName;
    private int foodKcal;
    private int foodProtein;
    private int foodCarb;
    private int foodFat;

    public String getFoodName() {
        return foodName;
    }

    public void setFoodName(String foodName) {
        this.foodName = foodName;
    }

    public int getFoodKcal() {
        return foodKcal;
    }

    public void setFoodKcal(int foodKcal) {
        this.foodKcal = foodKcal;
    }

    public int getFoodProtein() {
        return foodProtein;
    }

    public void setFoodProtein(int foodProtein) {
        this.foodProtein = foodProtein;
    }

    public int getFoodCarb() {
        return foodCarb;
    }

    public void setFoodCarb(int foodCarb) {
        this.foodCarb = foodCarb;
    }

    public int getFoodFat() {
        return foodFat;
    }

    public void setFoodFat(int foodFat) {
        this.foodFat = foodFat;
    }

    @Override
    public String toString() {
        return foodName;
    }
}
