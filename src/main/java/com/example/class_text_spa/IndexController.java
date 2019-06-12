package com.example.class_text_spa;

import org.springframework.http.MediaType;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.Map;

import static java.lang.System.out;

@Controller
public class IndexController {

    @GetMapping("/index")
    public String indexForm(Model model) {
        model.addAttribute("text", new Text());
        return "index";
    }

    @PostMapping(
            path ="/checkText")
    @ResponseBody
    public Map<String, String> textSubmit(@RequestBody Text text) {
        HashMap<String, String> map = new HashMap<>();
        System.out.println("/checkText"+text.getContent());
        System.out.println("lang - "+text.TextCheck());
        map.put("lang", text.TextCheck());
        return map;
    }



}
