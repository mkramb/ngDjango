from django.conf.urls import patterns, url

from . import views


urlpatterns = patterns('',
    url(r'^$', views.AppView.as_view(), name='app'),
)
