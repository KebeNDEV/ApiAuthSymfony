<?php

namespace App\DataFixtures;

use App\Entity\Curso;
use App\Entity\Asignatura;
use Doctrine\Bundle\FixturesBundle\Fixture;
use Doctrine\Persistence\ObjectManager;

class AppFixtures extends Fixture
{
    public function load(ObjectManager $manager): void
    {
        // Crear un curso de ejemplo
        $curso = new Curso();
        $curso->setNombre('Primer Curso');

        // Crear algunas asignaturas de ejemplo
        $asignatura1 = new Asignatura();
        $asignatura1->setNombre('Matemáticas');
        $curso->addAsignatura($asignatura1);

        $asignatura2 = new Asignatura();
        $asignatura2->setNombre('Lengua');
        $curso->addAsignatura($asignatura2);

        // Persistir los cambios
        $manager->persist($curso);
        $manager->flush();
    }
} 