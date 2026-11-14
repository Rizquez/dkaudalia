from __future__ import annotations

from sqlalchemy import Column, String, DateTime, Boolean, UniqueConstraint
from sqlalchemy.sql import func

from models.core import ModelBase


# Internally, the database stores records under the name `user`,
# so for this model, the name will be assigned in the plural form.
class User(ModelBase):
    __tablename__ = "users"

    __table_args__ = (
        UniqueConstraint(
            "clerk_id",
            "email",
            name="uq_users_clerk_id_email",
        ),
    )

    clerk_id = Column(String, nullable=False)

    email = Column(String, nullable=False)

    name = Column(String, nullable=False, unique=False)

    created_at = Column(
        DateTime(timezone=False), nullable=False, server_default=func.now()
    )

    access_allowed = Column(Boolean, nullable=False, default=False)
