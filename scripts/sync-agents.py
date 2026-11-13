#!/usr/bin/env python3
"""Compatibility entry point; implementation lives in scripts/shared/."""
from pathlib import Path
import runpy

runpy.run_path(
    str(Path(__file__).resolve().parent / "shared" / "sync-agents.py"),
    run_name="__main__",
)
