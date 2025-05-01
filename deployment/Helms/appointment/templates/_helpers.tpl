{{/*
Return the fullname of the chart
*/}}
{{- define "appointment.fullname" -}}
{{- printf "%s-%s" .Release.Name .Chart.Name | trunc 63 | trimSuffix "-" -}}
{{- end -}}