# Semver validation action

SEMVER validator

## Inputs

### `version`

**Required** Version to validate.

## Example usage

```yaml
uses: rubenesp87/semver-validation-action@0.1.0
with:
  version: ${{ github.event.release.tag_name }}
```

```yaml
uses: rubenesp87/semver-validation-action@0.1.0
with:
  version: 'v0.7.9'
```

```yaml
uses: rubenesp87/semver-validation-action@0.1.0
with:
  version: '0.7.9-beta.1'
```
