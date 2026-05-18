package com.medstore.backend.service.impl;

import com.medstore.backend.entity.Medicine;
import com.medstore.backend.repository.MedicineRepository;
import com.medstore.backend.service.MedicineService;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class MedicineServiceImpl implements MedicineService {

    private final MedicineRepository repository;

    public MedicineServiceImpl(MedicineRepository repository) {
        this.repository = repository;
    }

    @Override
    public List<Medicine> getAllMedicines() {
        return repository.findAll();
    }

    @Override
    public Medicine getMedicineById(Long id) {
        return repository.findById(id).orElse(null);
    }

    @Override
    public Medicine addMedicine(Medicine medicine) {
        return repository.save(medicine);
    }

    @Override
    public Medicine updateMedicine(Long id, Medicine medicine) {

        Medicine existingMedicine = repository.findById(id).orElse(null);

        if (existingMedicine != null) {

            existingMedicine.setName(medicine.getName());
            existingMedicine.setDescription(medicine.getDescription());
            existingMedicine.setPrice(medicine.getPrice());
            existingMedicine.setStock(medicine.getStock());
            existingMedicine.setManufacturer(medicine.getManufacturer());

            return repository.save(existingMedicine);
        }

        return null;
    }

    @Override
    public void deleteMedicine(Long id) {
        repository.deleteById(id);
    }
}