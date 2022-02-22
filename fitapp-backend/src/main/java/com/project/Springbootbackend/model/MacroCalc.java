package com.project.Springbootbackend.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.ManyToOne;

@Entity(name = "macro")
public class MacroCalc extends EntityId {

    @ManyToOne
    private FoodDiary foodDiary;

    @ManyToOne
    private Food foodMacro;

    @Column(name = "food_name")
    private String foodName;
    private int calcKcal;
    private int calcProtein;
    private int calcCarb;
    private int calcFat;

    public FoodDiary getFoodDiary() {
        return foodDiary;
    }

    public void setFoodDiary(FoodDiary foodDiary) {
        this.foodDiary = foodDiary;
    }

    public Food getFoodMacro() {
        return foodMacro;
    }

    public void setFoodMacro(Food foodMacro) {
        this.foodMacro = foodMacro;
    }

    public String getFoodName() {
        return foodName;
    }

    public void setFoodName(String foodName) {
        this.foodName = foodName;
    }

    public int getCalcKcal() {
        return calcKcal;
    }

    public void setCalcKcal(int calcKcal) {
        this.calcKcal = calcKcal;
    }

    public int getCalcProtein() {
        return calcProtein;
    }

    public void setCalcProtein(int calcProtein) {
        this.calcProtein = calcProtein;
    }

    public int getCalcCarb() {
        return calcCarb;
    }

    public void setCalcCarb(int calcCarb) {
        this.calcCarb = calcCarb;
    }

    public int getCalcFat() {
        return calcFat;
    }

    public void setCalcFat(int calcFat) {
        this.calcFat = calcFat;
    }
}
