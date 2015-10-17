from django.conf.urls import patterns, url, include
from rest_framework import routers

from . import views


router = routers.DefaultRouter()
router.register(r'users', views.UserView, 'list')

urlpatterns = patterns('',
    url(r'^auth/', 'rest_framework_jwt.views.obtain_jwt_token'),
    url(r'^', include(router.urls)),
)
