<?xml version="1.0" encoding="UTF-8"?>
<sch:schema xmlns:sch="http://purl.oclc.org/dsdl/schematron" queryBinding="xslt2">
  <sch:ns prefix="f" uri="http://hl7.org/fhir"/>
  <sch:ns prefix="h" uri="http://www.w3.org/1999/xhtml"/>
  <!-- 
    This file contains just the constraints for the profile Device
    It includes the base constraints for the resource as well.
    Because of the way that schematrons and containment work, 
    you may need to use this schematron fragment to build a, 
    single schematron that validates contained resources (if you have any) 
  -->
  <sch:pattern>
    <sch:title>f:Device</sch:title>
    <sch:rule context="f:Device">
      <sch:assert test="count(f:extension[@url = 'https://taussig/fhir/StructureDefinition/implantClinicalStatus']) &lt;= 1">extension with URL = 'https://taussig/fhir/StructureDefinition/implantClinicalStatus': maximum cardinality of 'extension' is 1</sch:assert>
      <sch:assert test="count(f:extension[@url = 'https://taussig/fhir/StructureDefinition/implantStatusDate']) &lt;= 1">extension with URL = 'https://taussig/fhir/StructureDefinition/implantStatusDate': maximum cardinality of 'extension' is 1</sch:assert>
      <sch:assert test="count(f:extension[@url = 'https://taussig/fhir/StructureDefinition/previousImplant']) &lt;= 1">extension with URL = 'https://taussig/fhir/StructureDefinition/previousImplant': maximum cardinality of 'extension' is 1</sch:assert>
      <sch:assert test="count(f:extension[@url = 'https://taussig/fhir/StructureDefinition/implantedExternally']) &lt;= 1">extension with URL = 'https://taussig/fhir/StructureDefinition/implantedExternally': maximum cardinality of 'extension' is 1</sch:assert>
      <sch:assert test="count(f:udiCarrier) &lt;= 1">udiCarrier: maximum cardinality of 'udiCarrier' is 1</sch:assert>
      <sch:assert test="count(f:deviceName) &lt;= 1">deviceName: maximum cardinality of 'deviceName' is 1</sch:assert>
    </sch:rule>
  </sch:pattern>
  <sch:pattern>
    <sch:title>f:Device/f:property</sch:title>
    <sch:rule context="f:Device/f:property">
      <sch:assert test="count(f:valueCode) &gt;= 1">valueCode: minimum cardinality of 'valueCode' is 1</sch:assert>
      <sch:assert test="count(f:valueCode) &lt;= 1">valueCode: maximum cardinality of 'valueCode' is 1</sch:assert>
      <sch:assert test="count(f:valueCode) &gt;= 1">valueCode: minimum cardinality of 'valueCode' is 1</sch:assert>
      <sch:assert test="count(f:valueCode) &lt;= 1">valueCode: maximum cardinality of 'valueCode' is 1</sch:assert>
      <sch:assert test="count(f:valueCode) &gt;= 1">valueCode: minimum cardinality of 'valueCode' is 1</sch:assert>
      <sch:assert test="count(f:valueCode) &lt;= 1">valueCode: maximum cardinality of 'valueCode' is 1</sch:assert>
    </sch:rule>
  </sch:pattern>
</sch:schema>
