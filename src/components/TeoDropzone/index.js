import React, { useCallback, useEffect } from 'react';
import { DropzoneDiv, DropImg, ImgText, DivLabel } from './styles';
import { useDropzone } from 'react-dropzone'
import { useFormContext } from 'react-hook-form';
import Content from '../TeoField/Content';

const Dropzone = (props) => {
  const { name, label, text } = props;
  const {
    register,
    unregister,
    setValue,
    watch
  } = useFormContext()

  const files = watch(name);

  const onDrop = useCallback(
    (droppedFiles) => {
      setValue(name, droppedFiles, { shouldValidate: true })
    }, [setValue, name])

  const {getRootProps, getInputProps, isDragActive} = useDropzone({
    onDrop,
    accept: props.accept
  })

  useEffect(() => {
    register(name)
    return () => {
      unregister(name)
    }
  }, [register, unregister, name])

  return (
    <>
    <DropzoneDiv { ...getRootProps() } >
      <DivLabel>
        <Content>{label}</Content>
      </DivLabel>
      <input {...props} id={name} {...getInputProps()} />

      {
        files ?
        <DropImg src={URL.createObjectURL(files[0])} alt='Image thumbnail' /> :
        (
          <ImgText>{text}</ImgText>
        )
      }
    </DropzoneDiv>
  </>
  )
}

export default Dropzone;
