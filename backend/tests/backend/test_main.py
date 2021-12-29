"""Module that test running of the package."""
from backend.__main__ import HOST, PORT


def test_host() -> None:
    assert HOST == 'localhost'


def test_port() -> None:
    assert PORT == 8000
