# CS305E — Python CI/CD Command Cheat Sheet

> **Focus:** Python + pytest + coverage + Git + GitHub Actions + CI debugging  
> **Use:** Short revision notes for the scenario-based practical/exam.

---

## 1. 📁 Terminal / Project Navigation

| Command | When / Why to use | Remember |
|---|---|---|
| `pwd` | Show current working directory. | Location check |
| `ls` | List files/folders. | Quick project view |
| `ls -la` | Show hidden files such as `.git` and `.github`. | Useful for workflow folders |
| `cd <folder>` | Enter a folder. | Move into target directory |
| `cd ..` | Move one directory up. | Back one level |
| `mkdir <folder>` | Create a directory. | Project structure |
| `mkdir -p .github/workflows` | Create nested GitHub Actions folders. | Workflow directory |
| `touch <file>` | Create an empty file. | Useful for `.py` / `.yml` |
| `find . -maxdepth 2 -type f` | Quickly inspect project files. | Structure check |

---

## 2. 🐍 Python & Environment

| Command | When / Why to use | Remember |
|---|---|---|
| `python --version` | Check installed Python version. | Match CI version when required |
| `python -m venv .venv` | Create an isolated Python environment. | One environment per project |
| `source .venv/bin/activate` | Activate venv on Codespaces/Linux/macOS. | Prompt usually shows `(.venv)` |
| `deactivate` | Exit the virtual environment. | Does not delete it |
| `python -c "import src"` | Check whether Python can import `src`. | Useful for import errors |
| `python -m pip install --upgrade pip` | Update pip when installation behaves unexpectedly. | Optional maintenance |
| `python -m pip install -r requirements.txt` | Install all dependencies. | Preferred project setup |
| `python -m pip list` | List installed packages. | Dependency check |
| `python -m pip show <package>` | Show package details/version/location. | Debug dependency issues |

---

# 3. 🧪 pytest — Testing

### Run all tests

```bash
pytest
```

**Use:** Run the complete test suite.

---

### Run with project root on Python path

```bash
PYTHONPATH=. pytest
```

**Use:** Helpful when imports such as `from src.validator import ...` fail.

---

### Verbose output

```bash
pytest -v
```

**Use:** See individual test names and PASS/FAIL status.

---

### Compact output

```bash
pytest -q
```

**Use:** Get a shorter result.

---

### Run one test file

```bash
pytest tests/test_validator.py
```

**Use:** Isolate a particular test file.

---

### Run one specific test

```bash
pytest tests/test_validator.py::test_valid_email
```

**Use:** Debug one test only.

---

### Run tests matching a keyword

```bash
pytest -k "phone"
```

**Use:** Run related tests by name/expression.

---

### Stop at first failure

```bash
pytest -x
```

**Use:** Quickly identify the first failing test.

---

### Shorter traceback

```bash
pytest --tb=short
```

**Use:** Cleaner failure output.

---

### Check test discovery

```bash
pytest --collect-only
```

**Use:** Confirm pytest is discovering the expected tests without executing them.

---

### Run marked tests

```bash
pytest -m <marker>
```

**Use:** Run tests belonging to a defined pytest marker.

---

# 4. 📊 Coverage — VERY IMPORTANT

### Basic coverage

```bash
PYTHONPATH=. pytest --cov=src
```

**Use:** Measure how much of `src` is executed by tests.

---

### Enforce minimum coverage

```bash
PYTHONPATH=. pytest --cov=src --cov-fail-under=85
```

**Use:** Make CI fail if coverage is below `85%`.

### Logic

```text
Coverage >= 85%  → PASS
Coverage < 85%   → FAIL
```

---

### Show missing lines

```bash
pytest --cov=src --cov-report=term-missing
```

**Use:** Find exactly which source lines are not covered.

---

### Generate HTML coverage report

```bash
pytest --cov=src --cov-report=html
```

**Use:** Generate a detailed visual coverage report.

---

### Missing lines + coverage gate

```bash
pytest --cov=src --cov-report=term-missing --cov-fail-under=85
```

**Use:** See missing lines while also enforcing the 85% requirement.

---

### Display saved coverage data

```bash
coverage report
```

**Use:** Inspect existing coverage data.

---

### Remove old coverage data

```bash
coverage erase
```

**Use:** Start with clean coverage data when necessary.

---

# 5. 🌿 Git — Daily CI Workflow

### Check repository status

```bash
git status
```

**Use:** See current branch, changed files, staged files, and untracked files.

> ⭐ Use this frequently.

---

### List branches

```bash
git branch
```

**Use:** See local branches.

---

### Create + switch to branch

```bash
git switch -c test-ci
```

**Use:** Create a new feature/test branch.

---

### Switch branch

```bash
git switch main
```

**Use:** Move to an existing branch.

---

### Older equivalent

```bash
git checkout -b test-ci
```

**Use:** Older tutorials commonly use this.

---

### See changes

```bash
git diff
```

**Use:** Review unstaged changes before committing.

---

### Stage all changes

```bash
git add .
```

**Use:** Stage all modified/untracked files.

---

### Stage one file

```bash
git add tests/test_validator.py
```

**Use:** Stage only a specific file.

---

### Review staged changes

```bash
git diff --staged
```

**Use:** Check exactly what will enter the next commit.

---

### Commit

```bash
git commit -m "Add validator tests"
```

**Use:** Save staged changes as a Git commit.

---

### Push existing branch

```bash
git push
```

**Use:** Upload commits to GitHub.

---

### First push of a new branch

```bash
git push -u origin test-ci
```

**Use:** Push a new branch and set its upstream.

---

### Pull remote changes

```bash
git pull
```

**Use:** Bring remote changes into the current branch.

---

### Fetch without merging

```bash
git fetch
```

**Use:** Download remote information for inspection.

---

### See commit history

```bash
git log --oneline
```

**Use:** Quick commit history.

---

### Inspect latest commit

```bash
git show --stat
```

**Use:** See files changed by the latest commit.

---

### Check GitHub remote

```bash
git remote -v
```

**Use:** Confirm which GitHub repository is connected.

---

# 6. ↩️ Git Recovery / Cleanup

> ⚠️ **Use carefully. Some commands can remove work.**

### Discard unstaged changes

```bash
git restore <file>
```

**Use:** Remove local uncommitted changes from a file.

---

### Unstage a file

```bash
git restore --staged <file>
```

**Use:** Undo `git add` while keeping the file changes.

---

### Undo latest commit but keep changes staged

```bash
git reset --soft HEAD~1
```

**Use:** Correct/rework the latest commit.

---

### Hard reset

```bash
git reset --hard HEAD~1
```

**Use:** Remove the latest commit and associated working changes.

> ⚠️ Destructive — use only when you understand the result.

---

### Preview untracked-file cleanup

```bash
git clean -n
```

**Use:** Dry-run before deleting untracked files.

---

### Remove untracked files

```bash
git clean -f
```

**Use:** Delete untracked files.

> ⚠️ Destructive.

---

# 7. ⚙️ GitHub Actions

### Create workflow directory

```bash
mkdir -p .github/workflows
```

**Use:** Standard location for GitHub Actions workflows.

---

### Create test workflow

```bash
touch .github/workflows/tests.yml
```

**Use:** Create Workflow A for tests.

---

### Create coverage workflow

```bash
touch .github/workflows/coverage.yml
```

**Use:** Create Workflow B for coverage.

---

## Important workflow structure

```yaml
name: Run Tests

on:
  pull_request:
    branches:
      - main

jobs:
  test:
    runs-on: ubuntu-latest

    steps:
      - name: Checkout repository
        uses: actions/checkout@v4

      - name: Setup Python
        uses: actions/setup-python@v5
        with:
          python-version: "3.12"

      - name: Install dependencies
        run: pip install -r requirements.txt

      - name: Run tests
        run: PYTHONPATH=. pytest
```

### Important parts

| Part | Meaning |
|---|---|
| `pull_request` | Run CI for PR events |
| `branches: main` | Target PRs to `main` |
| `actions/checkout@v4` | Get repository code onto runner |
| `actions/setup-python@v5` | Set up Python |
| `pip install -r requirements.txt` | Install dependencies |
| `pytest` | Run tests |

---

# 8. 📊 Coverage Workflow

Core command:

```yaml
run: PYTHONPATH=. pytest --cov=src --cov-fail-under=85
```

### Remember

```text
--cov=src
    ↓
Measure coverage of src

--cov-fail-under=85
    ↓
Fail CI if coverage < 85%
```

---

# 9. 🔀 Pull Request + Branch Protection

Typical CI flow:

```text
Developer Branch
       ↓
   Pull Request
       ↓
 GitHub Actions
       ↓
 ┌───────────────┐
 │ Tests         │
 │ Coverage      │
 └───────────────┘
       ↓
    PASS?
    /   \
  YES    NO
   ↓      ↓
Merge   Block
```

### Why `pull_request` instead of `push`?

```yaml
on:
  pull_request:
    branches:
      - main
```

**Use:** Validate proposed changes **before merging them into `main`**.

---

# 10. 🚨 CI Failure Diagnosis

## Case 1 — Tests fail

```text
pytest → FAIL
```

Think:

> A test or production-code behavior is incorrect.

Use:

```bash
PYTHONPATH=. pytest -v
```

---

## Case 2 — Tests pass but coverage fails

```text
Tests     → PASS
Coverage  → FAIL
```

Think:

> Tests are passing, but some source code is not sufficiently tested.

Use:

```bash
pytest --cov=src --cov-report=term-missing
```

---

## Case 3 — Import error

```text
ModuleNotFoundError: No module named 'src'
```

Check:

```bash
python -c "import src"
```

Then try:

```bash
PYTHONPATH=. pytest
```

Also verify the project structure.

---

## Case 4 — Missing package

```text
ModuleNotFoundError: No module named 'pytest'
```

Use:

```bash
python -m pip install -r requirements.txt
```

---

## Case 5 — CI fails after a fix

After correcting the problem:

```bash
git status
git add .
git commit -m "Fix CI tests"
git push
```

The existing PR will update and GitHub Actions will run again.

---

# 11. 🧠 FAST DIAGNOSIS TABLE

| Problem | Command / Action |
|---|---|
| Don't know current location | `pwd` |
| Need to see files | `ls -la` |
| Python version check | `python --version` |
| Need isolated environment | `python -m venv .venv` |
| Install project dependencies | `python -m pip install -r requirements.txt` |
| Run all tests | `PYTHONPATH=. pytest` |
| See detailed test results | `pytest -v` |
| Run one test | `pytest file.py::test_name` |
| Stop at first failure | `pytest -x` |
| Check test discovery | `pytest --collect-only` |
| Check coverage | `pytest --cov=src` |
| Find uncovered lines | `pytest --cov=src --cov-report=term-missing` |
| Enforce 85% coverage | `pytest --cov=src --cov-fail-under=85` |
| Check changed files | `git status` |
| Review changes | `git diff` |
| Stage changes | `git add .` |
| Commit | `git commit -m "message"` |
| Push | `git push` |
| Create branch | `git switch -c branch-name` |
| Switch branch | `git switch branch-name` |
| View commits | `git log --oneline` |
| Check GitHub remote | `git remote -v` |
| CI failed | GitHub → **Actions** → failed workflow → failed job → failed step |
| PR blocked | Check failed/required status checks |
| Coverage low | Add tests for uncovered functions/branches |
| Fix pushed but CI not updated | Confirm `git push` succeeded and inspect Actions |

---

# 12. 🤖 AI Test Prioritization — Concept

Your Unit 1 syllabus includes AI-driven test selection/failure prediction.

The important idea is:

```text
Code Change
     ↓
AI Prediction
     ↓
High-Risk / High-Priority Tests
     ↓
Run Priority Tests
     ↓
Run Remaining Tests
     ↓
Final CI Result
```

### Important principle

> AI may **prioritize** tests, but actual test execution/results should determine CI success.

### What the AI can use

- Changed files
- Historical test failures
- Previous CI results
- Test-to-code relationships
- Failure frequency

---

# 13. 🧠 FINAL EXAM MEMORY FLOW

```text
EDIT CODE
   ↓
PYTEST
   ↓
COVERAGE
   ↓
GIT STATUS
   ↓
GIT ADD
   ↓
GIT COMMIT
   ↓
GIT PUSH
   ↓
PULL REQUEST
   ↓
GITHUB ACTIONS
   ↓
TEST + COVERAGE
   ↓
BRANCH PROTECTION
   ↓
MERGE / BLOCK
```

---

## ⭐ 15 Commands to Memorize First

```bash
python --version

python -m venv .venv

source .venv/bin/activate

python -m pip install -r requirements.txt

PYTHONPATH=. pytest

pytest -v

pytest -x

pytest --cov=src

pytest --cov=src --cov-report=term-missing

pytest --cov=src --cov-fail-under=85

git status

git switch -c test-ci

git add .

git commit -m "message"

git push
```

---

## ⚠️ Safety

Be careful with:

```bash
git restore <file>
git reset --hard HEAD~1
git clean -f
```

These can remove work. In the guided exam, follow the instructor's exact steps when provided.

---

## 📌 Scope

This cheat sheet is intentionally focused on the **Python-based CS305E Unit 1 CI/CD practical**:

- Python
- pytest
- coverage
- Git
- GitHub Actions
- Pull Requests
- CI debugging
- AI test prioritization concepts

It does **not** add unrelated Docker/deployment commands.
