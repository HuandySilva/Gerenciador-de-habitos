package com.unifei.gerenciadorhabitos.models;

import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.data.mongodb.core.mapping.Field;
import org.springframework.data.mongodb.core.mapping.FieldType;
import org.springframework.data.mongodb.core.mapping.MongoId;

import lombok.Data;

@Data
@Document(collection = "habits")
public class HabitModel {
    @MongoId(FieldType.OBJECT_ID)
    private String id;
    @Field("description")
    private String description;
    @Field("emoji")
    private String emoji;

}
