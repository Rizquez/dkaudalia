import requests
import logging
from src.env import (
    get_email_service_id,
    get_email_new_user_template_id,
    get_email_user_id,
    get_email_private_key,
)
from src.constants import EMAILJS_API_URL


def send_access_request_email(
    name: str,
    email: str,
    clerk_id: str,
    timeout: int = 10,
) -> None:
    payload = {
        "service_id": get_email_service_id(),
        "template_id": get_email_new_user_template_id(),
        "user_id": get_email_user_id(),
        "accessToken": get_email_private_key(),
        "template_params": {
            "name": name,
            "email": email,
            "subject": "Nueva solicitud de acceso a Dkaudalia",
            "message": (
                f"Nuevo usuario pendiente de aprobacion:\n\n"
                f"Name: {name}\n"
                f"Email: {email}\n"
                f"Clerk ID: {clerk_id}"
            ),
        },
    }

    response = requests.post(
        url=EMAILJS_API_URL,
        json=payload,
        timeout=timeout,
    )

    if not response.ok:
        # TODO: improve logging
        logging.error(
            "EmailJS error: status=%s, response=%s",
            response.status_code,
            response.text[:500],
        )

    response.raise_for_status()
