from rest_framework.serializers import *
from .models import *

class Home_serializers(ModelSerializer):
    class Meta:
        model = Home
        fields = '__all__'

class Homee_serializers(ModelSerializer):
    class Meta:
        model = Homee
        fields = '__all__'

class T_Home2_serializers(ModelSerializer):
    class Meta:
        model = T_Home2
        fields = '__all__'

class Categories_serializers(ModelSerializer):
    class Meta:
        model = Categories
        fields = '__all__'

class Categories_Type1_serializers(ModelSerializer):
    class Meta:
        model = Categories_Type1
        fields = "__all__"

class Type1_serializers(ModelSerializer):
    class Meta:
        model = Type1
        fields = "__all__"

class Categories_Type2_serializers(ModelSerializer):
    class Meta:
        model = Categories_Type2
        fields = "__all__"

class Type2_serializers(ModelSerializer):
    class Meta:
        model = Type2
        fields = "__all__"

class Categories_Type3_serializers(ModelSerializer):
    class Meta:
        model = Categories_Type3
        fields = "__all__"

class Type3_serializers(ModelSerializer):
    class Meta:
        model = Type3
        fields = "__all__"

class Categories_Type4_serializers(ModelSerializer):
    class Meta:
        model = Categories_Type4
        fields = "__all__"

class Type4_serializers(ModelSerializer):
    class Meta:
        model = Type4
        fields = "__all__"

class Categories_Type5_serializers(ModelSerializer):
    class Meta:
        model = Categories_Type5
        fields = "__all__"

class Type5_serializers(ModelSerializer):
    class Meta:
        model = Type5
        fields = "__all__"

class Categories_Type6_serializers(ModelSerializer):
    class Meta:
        model = Categories_Type6
        fields = "__all__"

class Type6_serializers(ModelSerializer):
    class Meta:
        model = Type6
        fields = "__all__"

class Categories_Type7_serializers(ModelSerializer):
    class Meta:
        model = Categories_Type7
        fields = "__all__"

class Type7_serializers(ModelSerializer):
    class Meta:
        model = Type7
        fields = "__all__"