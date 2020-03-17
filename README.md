# Semver validation action

SEMVER validator

## Inputs

### `version`

**Required** Version to validate. Default `"0.0.0"`.

## Outputs

### `is-valid`

Return if version is valid.

## Example usage

```yaml
uses: actions/semver-validation-action@master
with:
  version: '0.7.9'
```

```yaml
uses: actions/semver-validation-action@master
with:
  version: '0.7.9-beta.1'
```