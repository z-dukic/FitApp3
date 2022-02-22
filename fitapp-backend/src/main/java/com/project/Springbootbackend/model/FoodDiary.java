package com.project.Springbootbackend.model;

import javax.persistence.Entity;
import javax.persistence.OneToMany;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

@Entity
public class FoodDiary extends EntityId {

    private Date date;

    @OneToMany(mappedBy = "foodDiary")
    private List<MacroCalc> macroCalc = new ArrayList<>();

    public Date getDate() {
        return date;
    }

    public void setDate(Date date) {
        this.date = date;
    }

    public List<MacroCalc> getMacroCalc() {
        return macroCalc;
    }

    public void setMacroCalc(List<MacroCalc> macroCalc) {
        this.macroCalc = macroCalc;
    }

    @Override
    public String toString() {
        SimpleDateFormat df = new SimpleDateFormat("EEE, dd. MM. YYYY");
        return df.format(date);
    }
}
