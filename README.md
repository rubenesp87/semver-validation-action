# Semver validation action

SEMVER validator

## Inputs

### `version`

**Required** Version to validate.

## Example usage

```yaml
uses: actions/semver-validation-action@0.0.5
with:
  version: ${{ github.event.release.tag_name }}
```

```yaml
uses: actions/semver-validation-action@0.0.5
with:
  version: 'v0.7.9'
```

```yaml
uses: actions/semver-validation-action@0.0.5
with:
  version: '0.7.9-beta.1'
```