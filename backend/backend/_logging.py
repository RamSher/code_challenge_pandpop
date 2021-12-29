"""Module that handles logger setup."""
import logging
import os


# Adapted from https://docs.python.org/2/library/logging.html#logrecord-attributes
_LOG_LEVEL = os.environ.get('LOG_LEVEL', 'INFO').upper()


def _raise_test_plugin_logging_level_to_error() -> None:
    """Raise the default test plugin logging level to `ERROR`.

    Some test plugin loggers have a default logging level of `debug`. This severely hinders
    debugabbility of code, since test plugin logs will swamp `stdout` if any test fails.

    To resolve this, we raise the default logging level of test plugin to `ERROR` here.

    """
    logging.getLogger('flake8').setLevel(logging.ERROR)


def configure_logging() -> None:
    """Configure the project logging.

    This function configures the project logging, all loggers instantiated after calling
    this function will inherit this configuration.

    This function should be called at the very start of running the application, else loggers
    with different configurations may be instantiated.

    """
    _raise_test_plugin_logging_level_to_error()

    root_logger = logging.getLogger()
    root_logger.setLevel(_LOG_LEVEL)
