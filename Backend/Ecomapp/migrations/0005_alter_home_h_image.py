# Generated by Django 5.1.4 on 2025-01-01 06:52

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('Ecomapp', '0004_alter_home_h_image'),
    ]

    operations = [
        migrations.AlterField(
            model_name='home',
            name='H_Image',
            field=models.ImageField(null=True, upload_to=''),
        ),
    ]
