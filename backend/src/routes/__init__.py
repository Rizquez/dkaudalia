from __future__ import annotations

from typing import TYPE_CHECKING

from .user import router as router_user

if TYPE_CHECKING:
    from fastapi import FastAPI


map_routers = {
    "/user": (router_user, "User"),
}


def setup_routers(app: "FastAPI") -> None:
    for prefix, (router, tag) in map_routers.items():
        app.include_router(
            router=router,
            prefix=prefix,
            tags=[tag],
        )
