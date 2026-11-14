"""add user model

Revision ID: 488184cf81f7
Revises:
Create Date: 2026-11-13 18:04:30.726532

"""

from typing import Sequence, Union

from alembic import op
import sqlalchemy as sa

revision: str = "488184cf81f7"
down_revision: Union[str, None] = None
branch_labels: Union[str, Sequence[str], None] = None
depends_on: Union[str, Sequence[str], None] = None


def upgrade() -> None:
    op.create_table(
        "users",
        sa.Column("clerk_id", sa.String(), nullable=False),
        sa.Column("email", sa.String(), nullable=False),
        sa.Column("name", sa.String(), nullable=False),
        sa.Column(
            "created_at", sa.DateTime(), server_default=sa.text("now()"), nullable=False
        ),
        sa.Column("access_allowed", sa.Boolean(), nullable=False),
        sa.Column("id", sa.BigInteger(), autoincrement=True, nullable=False),
        sa.PrimaryKeyConstraint("id"),
        sa.UniqueConstraint("clerk_id", "email", name="uq_users_clerk_id_email"),
    )


def downgrade() -> None:
    op.drop_table("users")
