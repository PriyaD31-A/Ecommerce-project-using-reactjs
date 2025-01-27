from rest_framework.views import APIView
from rest_framework import viewsets
from rest_framework.response import Response
from . models import *
from . serializers import *

# Create your views here.

class Home_view(viewsets.ModelViewSet):
    queryset = Home.objects.all()
    serializer_class = Home_serializers

class Homee_view(viewsets.ModelViewSet):
    queryset = Homee.objects.all()
    serializer_class = Homee_serializers

class T_Home2_view(viewsets.ModelViewSet):
    queryset = T_Home2.objects.all()
    serializer_class = T_Home2_serializers

class Categories_view(viewsets.ModelViewSet):
    queryset = Categories.objects.all()
    serializer_class = Categories_serializers

class Categories_Type1_View(viewsets.ModelViewSet):
    queryset = Categories_Type1.objects.all()
    serializer_class = Categories_Type1_serializers

class Type1_View(viewsets.ModelViewSet):
    queryset = Type1.objects.all()
    serializer_class = Type1_serializers

class Add_View(APIView):
    def get(self,request,id):
        categories = Type1.objects.filter(Serial_id = id)
        json_data = Type1_serializers(categories,many = True).data
        return Response(json_data)
    
class Categories_Type2_View(viewsets.ModelViewSet):
    queryset = Categories_Type2.objects.all()
    serializer_class = Categories_Type2_serializers

class Type2_View(viewsets.ModelViewSet):
    queryset = Type2.objects.all()
    serializer_class = Type2_serializers

class Add_View1(APIView):
    def get(self,request,id):
        categories = Type2.objects.filter(Serial_id = id)
        json_data = Type2_serializers(categories,many = True).data
        return Response(json_data)


class Categories_Type3_View(viewsets.ModelViewSet):
    queryset = Categories_Type3.objects.all()
    serializer_class = Categories_Type3_serializers

class Type3_View(viewsets.ModelViewSet):
    queryset = Type3.objects.all()
    serializer_class = Type3_serializers

class Add_View2(APIView):
    def get(self,request,id):
        categories = Type3.objects.filter(Serial_id = id)
        json_data = Type3_serializers(categories,many = True).data
        return Response(json_data)
    
class Categories_Type4_View(viewsets.ModelViewSet):
    queryset = Categories_Type4.objects.all()
    serializer_class = Categories_Type4_serializers

class Type4_View(viewsets.ModelViewSet):
    queryset = Type4.objects.all()
    serializer_class = Type4_serializers

class Add_View3(APIView):
    def get(self,request,id):
        categories = Type4.objects.filter(Serial_id = id)
        json_data = Type4_serializers(categories,many = True).data
        return Response(json_data)

class Categories_Type5_View(viewsets.ModelViewSet):
    queryset = Categories_Type5.objects.all()
    serializer_class = Categories_Type5_serializers

class Type5_View(viewsets.ModelViewSet):
    queryset = Type5.objects.all()
    serializer_class = Type5_serializers

class Add_View4(APIView):
    def get(self,request,id):
        categories = Type5.objects.filter(Serial_id = id)
        json_data = Type5_serializers(categories,many = True).data
        return Response(json_data)

class Categories_Type6_View(viewsets.ModelViewSet):
    queryset = Categories_Type6.objects.all()
    serializer_class = Categories_Type6_serializers

class Type6_View(viewsets.ModelViewSet):
    queryset = Type6.objects.all()
    serializer_class = Type6_serializers

class Add_View5(APIView):
    def get(self,request,id):
        categories = Type6.objects.filter(Serial_id = id)
        json_data = Type6_serializers(categories,many = True).data
        return Response(json_data)


class Categories_Type7_View(viewsets.ModelViewSet):
    queryset = Categories_Type7.objects.all()
    serializer_class = Categories_Type7_serializers

class Type7_View(viewsets.ModelViewSet):
    queryset = Type7.objects.all()
    serializer_class = Type7_serializers

class Add_View6(APIView):
    def get(self,request,id):
        categories = Type7.objects.filter(Serial_id = id)
        json_data = Type7_serializers(categories,many = True).data
        return Response(json_data)
