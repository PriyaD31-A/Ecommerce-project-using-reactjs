# Generated by Django 5.1.4 on 2025-01-25 17:41

import django.db.models.deletion
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('Ecomapp', '0014_categories_type4_type4'),
    ]

    operations = [
        migrations.AlterField(
            model_name='type4',
            name='Serial',
            field=models.ForeignKey(null=True, on_delete=django.db.models.deletion.SET_NULL, to='Ecomapp.categories_type4'),
        ),
    ]
