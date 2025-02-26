"""
URL configuration for Ecommerce1 project.

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/5.1/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""

from rest_framework.routers import DefaultRouter
from django.contrib import admin
from django.urls import path
from django.urls import path,include
from Ecomapp.views import *
from django.conf import settings
from django.conf.urls.static import static

router =  DefaultRouter()
router.register(r'Home',Home_view)
router.register(r'Traditional',T_Home2_view)
router.register(r'categories',Categories_view)
# sarees
router.register(r'categories1',Categories_Type1_View)     
router.register(r'add1', Type1_View)
router.register(r'categories2',Categories_Type2_View)
router.register(r'add2',Type2_View)
router.register(r'categories3',Categories_Type3_View)
router.register(r'add3',Type3_View)
router.register(r'categories4',Categories_Type4_View)
router.register(r'add4',Type4_View)
router.register(r'categories5',Categories_Type5_View)
router.register(r'add5',Type5_View)
router.register(r'categories6',Categories_Type6_View)
router.register(r'add6',Type6_View)
router.register(r'categories7',Categories_Type7_View)
router.register(r'add7',Type7_View)



urlpatterns = [
    path('admin/',admin.site.urls),
    path('apivalues/',include(router.urls)),
    # Sarees
    path('add1/<int:id>/',Add_View.as_view()),
    path('add2/<int:id>/',Add_View1.as_view()),
    path('add3/<int:id>/',Add_View2.as_view()),
    path('add4/<int:id>/',Add_View3.as_view()),
    path('add5/<int:id>/',Add_View4.as_view()),
    path('add6/<int:id>/',Add_View5.as_view()),
    path('add7/<int:id>/',Add_View6.as_view())
]

if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL,document_root = settings.MEDIA_ROOT)
