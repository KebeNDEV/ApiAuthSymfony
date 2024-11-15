<?php

// src/Form/CursoType.php

namespace App\Form;

use App\Entity\Curso;
use App\Entity\Asignatura;
use Symfony\Bridge\Doctrine\Form\Type\EntityType;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\Form\Extension\Core\Type\SubmitType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;

class CursoType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options)
    {
        $builder
            ->add('nombre', TextType::class)
            // Agregar las asignaturas asociadas al curso como un select múltiple
            ->add('asignaturas', EntityType::class, [
                'class' => Asignatura::class,
                'choice_label' => 'nombre', // El campo que se mostrará como opción
                'multiple' => true, // Permite seleccionar varias asignaturas
                'expanded' => false, // Establecer esto a false para que se muestre como un select en vez de checkboxes
            ])
            ->add('save', SubmitType::class, ['label' => 'Update Course']);
    }

    public function configureOptions(OptionsResolver $resolver)
    {
        $resolver->setDefaults([
            'data_class' => Curso::class,
        ]);
    }
}
