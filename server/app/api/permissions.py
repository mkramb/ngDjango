from rest_framework import permissions


class IsStaffOrTargetUser(permissions.BasePermission):
    def has_permission(self, request, view):
        return request.method == 'POST' or request.user.is_active

    def has_object_permission(self, request, view, obj):
        return request.user.is_staff or obj == request.user
