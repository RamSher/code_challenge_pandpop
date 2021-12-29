# backend

The backend API for our coding challenge is written using Python 3.

## Build setup

There are two ways you can setup your project:

## Poetry

```bash
# install dependencies
$ poetry install

# run the build in dev mode
$ poetry run python -X dev -m backend

# run in production mode
$ poetry run python -m backend

# run tests
$ poetry run pytest
```

## Pip

If you don't know Poetry or don't want to set it up, use this.
This way you cannot run pytests though!

```bash
# install dependencies
$ pip3 install -r requirements.txt

# run the build
$ python3 -m backend

```

## Potential problems

1. The currently activated Python version is not supported

If there is not a discoverable python version the following can occur

```
The currently activated Python version 3.7.6 is not supported by the project (^3.9).
Trying to find and use a compatible version.

[NoCompatiblePythonVersionFound]
Poetry was unable to find a compatible version. If you have one, you can explicitly use it via the "env use" command.
```

In this case:

1. make sure you have python3.9 installed and it is discoverable

```bash
# install
$ sudo apt install python3.9
# restart your terminal

#check that it is installed
$ python -V # or python3
$ python3.9 -V
# at least one of these should have output 3.9

# also you can check available python interpreters
$ type -a python # or python3


# after having python3.9 installed
$ poetry env use python3.9
```

in case of MacOS also:

```bash
> xcode-select --install
> brew install python3.9

# restart your terminal

> python3.9  # This should now work

# if linking is problem
> brew install python3.9

```

In case the conda / miniconda is used to manage environments

```bash
# create env
$ conda create -n myenv python=3.9

# activate environment
$ conda activate myenv

# deactivate base env activation on terminal start
$ conda config --set auto_activate_base false
```
