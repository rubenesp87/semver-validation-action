# Semver validation action

SEMVER validator

## Inputs

### `version`

**Required** Version to validate.

## Example usage

```yaml
uses: actions/semver-validation-action@master
with:
  version: ${{ github.event.release.tag_name }}
```

```yaml
uses: actions/semver-validation-action@master
with:
  version: '0.7.9-beta.1'
```