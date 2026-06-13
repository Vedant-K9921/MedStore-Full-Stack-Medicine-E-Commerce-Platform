package com.medstore.backend.service;

import com.medstore.backend.entity.Medicine;

import java.util.List;

public interface MedicineService {

    List<Medicine> getAllMedicines();

    Medicine getMedicineById(Long id);

    Medicine addMedicine(Medicine medicine);

    Medicine updateMedicine(Long id, Medicine medicine);

    void deleteMedicine(Long id);
}