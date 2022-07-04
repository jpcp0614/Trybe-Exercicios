minimum_grade = 6


try:
    students = open('estudantes.txt', mode='r')
except OSError:
    print('Arquivo não existe')
else:
    for line in students:
        student_name, student_grade = line.split()
        student_grade = int(student_grade)
        if student_grade < minimum_grade:
            print(f'{student_name}')
    students.close()
finally:
    print('Tentativa de abrir arquivo')
