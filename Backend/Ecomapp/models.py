from django.db import models

# Create your models here.

class Homee(models.Model):
    Name = models.CharField(max_length=50)
    # Price = models.IntegerField()


class Home(models.Model):
    H_serial = models.ForeignKey(Homee, null=True, on_delete = models.SET_NULL)
    H_Name = models.CharField(max_length=50)
    H_Price = models.IntegerField(null = True)
    H_Image = models.ImageField(null = True)

class T_Home2(models.Model):
    T_Name = models.CharField(max_length=50)
    T_Price = models.IntegerField(null = True)
    T_Image = models.ImageField(null = True)
 
class Categories(models.Model):
    C_Name = models.CharField(max_length=50)
    C_Price = models.IntegerField(null=True)
    C_Image = models.ImageField(null = True)

class Categories_Type1(models.Model):
    Serial_number = models.IntegerField()
    Name = models.CharField(max_length=50)

class Type1(models.Model):
    Serial = models.ForeignKey(Categories_Type1,null = True, on_delete=models.SET_NULL)
    Category_Name1 = models.CharField(max_length = 50)
    Category_Price = models.IntegerField()
    Category_Image = models.ImageField(null = True)

class Categories_Type2(models.Model):
    Serial_number = models.IntegerField()
    Name = models.CharField(max_length=50)

class Type2(models.Model):
    Serial = models.ForeignKey(Categories_Type2,null = True,on_delete=models.SET_NULL)
    Category_Name2 = models.CharField(max_length=50)
    Category_Price = models.IntegerField()
    Category_Image = models.ImageField(null = True)

class Categories_Type3(models.Model):
    Serial_number = models.IntegerField()
    Name = models.CharField(max_length=50)

class Type3(models.Model):
    Serial = models.ForeignKey(Categories_Type3,null = True,on_delete=models.SET_NULL)
    Category_Name2 = models.CharField(max_length=50)
    Category_Price = models.IntegerField()
    Category_Image = models.ImageField(null = True)

class Categories_Type4(models.Model):
    Serial_number = models.IntegerField()
    Name = models.CharField(max_length=50)

class Type4(models.Model):
    Serial = models.ForeignKey(Categories_Type4,null = True,on_delete=models.SET_NULL)
    Category_Name2 = models.CharField(max_length=50)
    Category_Price = models.IntegerField()
    Category_Image = models.ImageField(null = True)

class Categories_Type5(models.Model):
    Serial_number = models.IntegerField()
    Name = models.CharField(max_length=50)

class Type5(models.Model):
    Serial = models.ForeignKey(Categories_Type5,null = True,on_delete=models.SET_NULL)
    Category_Name2 = models.CharField(max_length=50)
    Category_Price = models.IntegerField()
    Category_Image = models.ImageField(null = True)

class Categories_Type6(models.Model):
    Serial_number = models.IntegerField()
    Name = models.CharField(max_length=50)

class Type6(models.Model):
    Serial = models.ForeignKey(Categories_Type6,null = True,on_delete=models.SET_NULL)
    Category_Name2 = models.CharField(max_length=50)
    Category_Price = models.IntegerField()
    Category_Image = models.ImageField(null = True)

class Categories_Type7(models.Model):
    Serial_number = models.IntegerField()
    Name = models.CharField(max_length=50)

class Type7(models.Model):
    Serial = models.ForeignKey(Categories_Type7,null = True,on_delete=models.SET_NULL)
    Category_Name2 = models.CharField(max_length=50)
    Category_Price = models.IntegerField()
    Category_Image = models.ImageField(null = True)

    