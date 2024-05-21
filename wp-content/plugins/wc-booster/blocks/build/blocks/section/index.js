/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/blocks/section/components/edit.js":
/*!***********************************************!*\
  !*** ./src/blocks/section/components/edit.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles_editor_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/editor.scss */ "./src/blocks/section/styles/editor.scss");
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/compose */ "@wordpress/compose");
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_compose__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../constants */ "./src/constants.js");
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../helpers */ "./src/helpers/index.js");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _inspector__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./inspector */ "./src/blocks/section/components/inspector.js");
/* harmony import */ var _block_json__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../block.json */ "./src/blocks/section/block.json");











const Edit = props => {
  const {
    attributes: {
      block_id,
      padding,
      margin,
      bgImage,
      bgVideo,
      bgPosition,
      bgColor,
      bgType,
      bgAttachment,
      bgOverlay,
      enableShapeDivider,
      verticalFlip = _block_json__WEBPACK_IMPORTED_MODULE_10__.attributes.verticalFlip["default"],
      horizontalFlip = _block_json__WEBPACK_IMPORTED_MODULE_10__.attributes.horizontalFlip["default"],
      shapeColor = _block_json__WEBPACK_IMPORTED_MODULE_10__.attributes.shapeColor["default"],
      shapeHeight = _block_json__WEBPACK_IMPORTED_MODULE_10__.attributes.shapeHeight["default"],
      shape = _block_json__WEBPACK_IMPORTED_MODULE_10__.attributes.shape["default"],
      shapePosition = _block_json__WEBPACK_IMPORTED_MODULE_10__.attributes.shapePosition["default"],
      shapeBgColor = _block_json__WEBPACK_IMPORTED_MODULE_10__.attributes.shapeBgColor.default,
      shapeZIndex = _block_json__WEBPACK_IMPORTED_MODULE_10__.attributes.shapeZIndex["default"]
    },
    setAttributes,
    instanceId,
    clientId
  } = props;
  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_8__.useEffect)(() => {
    const id = `${_constants__WEBPACK_IMPORTED_MODULE_6__.prefix}-section-block-instance-${instanceId}-${clientId}`;
    setAttributes({
      block_id: id
    });
  }, []);
  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_8__.useEffect)(() => {
    play();
  });
  const play = () => {
    if ("video" == bgType && !(0,_helpers__WEBPACK_IMPORTED_MODULE_7__.isUndefined)(bgVideo)) {
      let video = document.getElementById(block_id + "-video");
      if (video) {
        let source = document.getElementById(block_id + "-video-source");
        if (source.getAttribute("src") != bgVideo.url) {
          video.load();
        } else {
          video.play();
        }
      }
    }
  };
  const renderShape = () => {
    let shapeStyle = {
      backgroundColor: shapeBgColor,
      zIndex: shapeZIndex
    };
    if (shapePosition == "top" && !verticalFlip) {
      shapeStyle.marginBottom = `-${(0,_helpers__WEBPACK_IMPORTED_MODULE_7__.getResponsiveRangeVal)(shapeHeight)}`;
    } else if (verticalFlip) {
      shapeStyle.marginTop = `-${(0,_helpers__WEBPACK_IMPORTED_MODULE_7__.getResponsiveRangeVal)(shapeHeight)}`;
    }
    let shapeClass = "";
    if (horizontalFlip) {
      shapeClass += "horizontally-flipped";
    }
    if (verticalFlip) {
      shapeClass += shapeClass.length == 0 ? "" : " ";
      shapeClass += "vertically-flipped";
    }
    return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      style: shapeStyle,
      className: `${_constants__WEBPACK_IMPORTED_MODULE_6__.prefix}-section-shape ${shapePosition} ${shapeClass}`
    }, (0,_helpers__WEBPACK_IMPORTED_MODULE_7__.getShapeDivider)(shape, {
      height: (0,_helpers__WEBPACK_IMPORTED_MODULE_7__.getResponsiveRangeVal)(shapeHeight),
      fill: shapeColor
    }));
  };
  const style = {
    backgroundPosition: bgPosition,
    ...(0,_helpers__WEBPACK_IMPORTED_MODULE_7__.getDimensionStyle)(["paddingTop", "paddingRight", "paddingBottom", "paddingLeft"], padding),
    ...(0,_helpers__WEBPACK_IMPORTED_MODULE_7__.getDimensionStyle)(["marginTop", "marginRight", "marginBottom", "marginLeft"], margin),
    backgroundAttachment: bgAttachment ? "fixed" : ""
  };
  if ("image" == bgType && bgImage && bgImage.url) {
    style.backgroundImage = `url(${bgImage.url})`;
  } else if ("color" == bgType && bgColor) {
    style.backgroundColor = bgColor;
  }
  const overlayStyle = {
    backgroundColor: bgOverlay
  };
  const toolbarControls = [{
    icon: (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.SVG, {
      fill: "none",
      viewBox: "0 0 24 24",
      xmlns: "http://www.w3.org/2000/svg"
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.G, {
      fill: "currentColor"
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.Path, {
      d: "m6 5.5h12c.2761 0 .5.22386.5.5v3h1.5v-3c0-1.10457-.8954-2-2-2h-12c-1.10457 0-2 .89543-2 2v3h1.5v-3c0-.27614.22386-.5.5-.5z"
    }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.Path, {
      d: "m22 13h-20v-2h20z"
    }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.Path, {
      d: "m20 16.5h-1.5v-1.5h1.5z"
    }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.Path, {
      d: "m18 20c1.1046 0 2-.8954 2-2h-1.5c0 .2761-.2239.5-.5.5z"
    }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.Path, {
      d: "m7.5 18.5h2v1.5h-2z"
    }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.Path, {
      d: "m11 20v-1.5h2v1.5z"
    }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.Path, {
      d: "m5.5 18c0 .2761.22386.5.5.5v1.5c-1.10457 0-2-.8954-2-2z"
    }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.Path, {
      d: "m4 16.5h1.5v-1.5h-1.5z"
    }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.Path, {
      d: "m14.5 18.5v1.5h2v-1.5z"
    }))),
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__.__)("Flip vertically", "wc-booster"),
    isActive: !!verticalFlip,
    onClick: () => setAttributes({
      verticalFlip: !verticalFlip
    })
  }, {
    icon: (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.SVG, {
      fill: "none",
      viewBox: "0 0 24 24",
      xmlns: "http://www.w3.org/2000/svg"
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.G, {
      fill: "currentColor"
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.Path, {
      d: "m5.5 18v-12c0-.27614.22386-.5.5-.5h3v-1.5h-3c-1.10457 0-2 .89543-2 2v12c0 1.1046.89543 2 2 2h3v-1.5h-3c-.27614 0-.5-.2239-.5-.5z"
    }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.Path, {
      d: "m13 2v20h-2v-20z"
    }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.Path, {
      d: "m16.5 4v1.5h-1.5v-1.5z"
    }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.Path, {
      d: "m20 6c0-1.10457-.8954-2-2-2v1.5c.2761 0 .5.22386.5.5z"
    }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.Path, {
      d: "m18.5 16.5v-2h1.5v2z"
    }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.Path, {
      d: "m20 13h-1.5v-2h1.5z"
    }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.Path, {
      d: "m18 18.5c.2761 0 .5-.2239.5-.5h1.5c0 1.1046-.8954 2-2 2z"
    }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.Path, {
      d: "m16.5 20v-1.5h-1.5v1.5z"
    }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.Path, {
      d: "m18.5 9.5h1.5v-2h-1.5z"
    }))),
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__.__)("Flip horizontally", "wc-booster"),
    isActive: !!horizontalFlip,
    onClick: () => setAttributes({
      horizontalFlip: !horizontalFlip
    })
  }];
  const blockProps = (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.useBlockProps)({
    style: style
  });
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, enableShapeDivider && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.BlockControls, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.Toolbar, {
    controls: toolbarControls
  })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_inspector__WEBPACK_IMPORTED_MODULE_9__["default"], {
    ...props
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    ...blockProps
  }, enableShapeDivider && renderShape(), "video" == bgType && !(0,_helpers__WEBPACK_IMPORTED_MODULE_7__.isUndefined)(bgVideo) && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: `${_constants__WEBPACK_IMPORTED_MODULE_6__.prefix}-section-overlay`,
    style: overlayStyle
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("video", {
    id: `${block_id}-video`,
    autoPlay: true,
    muted: true,
    loop: true
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("source", {
    id: `${block_id}-video-source`,
    src: bgVideo.url,
    type: bgVideo.mime
  }), "Your browser does not support HTML5 video.")), play(), "image" == bgType && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: `${_constants__WEBPACK_IMPORTED_MODULE_6__.prefix}-section-overlay`,
    style: overlayStyle
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.InnerBlocks, {
    templateLock: false
  })));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_wordpress_compose__WEBPACK_IMPORTED_MODULE_2__.withInstanceId)(Edit));

/***/ }),

/***/ "./src/blocks/section/components/inspector.js":
/*!****************************************************!*\
  !*** ./src/blocks/section/components/inspector.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_hooks__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/hooks */ "@wordpress/hooks");
/* harmony import */ var _wordpress_hooks__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_hooks__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _custom_control__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../custom-control */ "./src/custom-control/index.js");
/* harmony import */ var _custom_control_responsive_range_wrapper__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../custom-control/responsive-range-wrapper */ "./src/custom-control/responsive-range-wrapper.js");
/* harmony import */ var _custom_control_image_control__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../custom-control/image-control */ "./src/custom-control/image-control.js");
/* harmony import */ var _custom_control_video_control__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../custom-control/video-control */ "./src/custom-control/video-control.js");
/* harmony import */ var _custom_control_dimension__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../custom-control/dimension */ "./src/custom-control/dimension.js");
/* harmony import */ var _components_exporter__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../components/exporter */ "./src/components/exporter.js");
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../helpers */ "./src/helpers/index.js");
/* harmony import */ var _components_tab__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../components/tab */ "./src/components/tab.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../constants */ "./src/constants.js");
/* harmony import */ var _block_json__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../block.json */ "./src/blocks/section/block.json");















const InspectorPanel = props => {
  const {
    attributes: {
      padding,
      margin,
      bgType,
      bgImage,
      bgVideo,
      bgPosition,
      bgColor,
      bgOverlay,
      containerType,
      containerWidth,
      bgAttachment,
      enableShapeDivider,
      shapeHeight = _block_json__WEBPACK_IMPORTED_MODULE_14__.attributes.shapeHeight["default"],
      shapeColor = _block_json__WEBPACK_IMPORTED_MODULE_14__.attributes.shapeColor["default"],
      shape = _block_json__WEBPACK_IMPORTED_MODULE_14__.attributes.shape["default"],
      shapeBgColor = _block_json__WEBPACK_IMPORTED_MODULE_14__.attributes.shapeBgColor.default,
      shapePosition = _block_json__WEBPACK_IMPORTED_MODULE_14__.attributes.shapePosition["default"],
      shapeZIndex = _block_json__WEBPACK_IMPORTED_MODULE_14__.attributes.shapeZIndex["default"]
    },
    setAttributes,
    clientId
  } = props;
  const {
    applyFilters
  } = (0,_wordpress_hooks__WEBPACK_IMPORTED_MODULE_4__.createHooks)();
  const shapes = applyFilters("riseBlocksShapes", [{
    shape: "hills",
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Hills", "wc-booster")
  }, {
    shape: "angled",
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Angled", "wc-booster")
  }, {
    shape: "waves",
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Waves", "wc-booster")
  }]);
  const bgData = {
    shapeColor: {
      value: shapeColor,
      title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Color", "wc-booster")
    },
    shapeBgColor: {
      value: shapeBgColor,
      title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Background", "wc-booster")
    }
  };
  const shapeColorSetting = Object.keys(bgData).map(key => ({
    title: () => (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", null, bgData[key].title, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.ColorIndicator, {
      colorValue: bgData[key].value
    })),
    content: () => (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_custom_control__WEBPACK_IMPORTED_MODULE_5__.ColorControl, {
      value: bgData[key].value,
      hideIndicator: true,
      onChange: c => setAttributes({
        [key]: c
      })
    })
  }));
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.InspectorAdvancedControls, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_exporter__WEBPACK_IMPORTED_MODULE_10__["default"], {
    clientId: clientId
  })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.InspectorControls, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelBody, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("General", "wc-booster"),
    initialOpen: true
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.SelectControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Container Type", "wc-booster"),
    options: [{
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Boxed", "wc-booster"),
      value: "boxed"
    }, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Full Width", "wc-booster"),
      value: "full-width"
    }],
    value: containerType,
    onChange: containerType => setAttributes({
      containerType
    })
  }), "boxed" == containerType && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_custom_control_responsive_range_wrapper__WEBPACK_IMPORTED_MODULE_6__["default"], {
    defaultValue: _block_json__WEBPACK_IMPORTED_MODULE_14__.attributes.containerWidth["default"],
    value: containerWidth,
    onChange: containerWidth => {
      setAttributes({
        containerWidth
      });
    },
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Width", "wc-booster"),
    beforeIcon: ""
  })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelBody, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Shape", "wc-booster"),
    initialOpen: false
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_custom_control__WEBPACK_IMPORTED_MODULE_5__.SwitchControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Enable Shape Divider", "wc-booster"),
    checked: enableShapeDivider,
    onChange: enableShapeDivider => {
      setAttributes({
        enableShapeDivider
      });
    }
  }), enableShapeDivider && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.SelectControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Position", "wc-booster"),
    options: [{
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Top", "wc-booster"),
      value: "top"
    }, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Bottom", "wc-booster"),
      value: "bottom"
    }],
    value: shapePosition,
    onChange: shapePosition => setAttributes({
      shapePosition
    })
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: `shape-divider-control`
  }, shapes.map((v, i) => (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("button", {
    key: i,
    className: `${v.shape == shape ? "selected" : ""}`,
    onClick: e => setAttributes({
      shape: v.shape
    })
  }, (0,_helpers__WEBPACK_IMPORTED_MODULE_11__.getShapeDivider)(v.shape, {
    height: "25px",
    width: "100%",
    fill: "#000000"
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("label", null, v.label)))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_custom_control_responsive_range_wrapper__WEBPACK_IMPORTED_MODULE_6__["default"], {
    defaultValue: _block_json__WEBPACK_IMPORTED_MODULE_14__.attributes.shapeHeight["default"],
    value: shapeHeight,
    onChange: shapeHeight => setAttributes({
      shapeHeight
    }),
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Height", "wc-booster"),
    beforeIcon: ""
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_tab__WEBPACK_IMPORTED_MODULE_12__["default"], {
    className: `${_constants__WEBPACK_IMPORTED_MODULE_13__.prefix}-tabbed-color-control`,
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Shape Color", "wc-booster"),
    data: shapeColorSetting
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.RangeControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Z-Index", "wc-booster"),
    allowReset: true,
    min: 0,
    max: 10000,
    value: shapeZIndex,
    onChange: shapeZIndex => setAttributes({
      shapeZIndex
    })
  }))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelBody, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Background", "wc-booster"),
    initialOpen: false
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_custom_control__WEBPACK_IMPORTED_MODULE_5__.BgControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Type", "wc-booster"),
    onChange: bgType => setAttributes({
      bgType
    }),
    value: bgType
  }), bgType == "image" && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_custom_control_image_control__WEBPACK_IMPORTED_MODULE_7__["default"], {
    onSelect: bgImage => {
      setAttributes({
        bgImage
      });
    },
    value: bgImage
  }), bgImage && bgImage.url && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_custom_control__WEBPACK_IMPORTED_MODULE_5__.BackgroundPosition, {
    value: bgPosition,
    onChange: bgPosition => setAttributes({
      bgPosition
    })
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_custom_control__WEBPACK_IMPORTED_MODULE_5__.FixedBackgroundColor, {
    checked: bgAttachment,
    onChange: bgAttachment => setAttributes({
      bgAttachment
    })
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_custom_control__WEBPACK_IMPORTED_MODULE_5__.BackgroundOverlayControl, {
    value: bgOverlay,
    onChange: bgOverlay => setAttributes({
      bgOverlay
    })
  }))), bgType == "video" && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_custom_control_video_control__WEBPACK_IMPORTED_MODULE_8__["default"], {
    onSelect: bgVideo => {
      setAttributes({
        bgVideo
      });
    },
    value: bgVideo
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_custom_control__WEBPACK_IMPORTED_MODULE_5__.BackgroundOverlayControl, {
    value: bgOverlay,
    onChange: bgOverlay => setAttributes({
      bgOverlay
    })
  })), bgType == "color" && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_custom_control__WEBPACK_IMPORTED_MODULE_5__.ColorControl, {
    value: bgColor,
    hideIndicator: true,
    onChange: bgColor => setAttributes({
      bgColor
    })
  })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelBody, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Spacing", "wc-booster"),
    initialOpen: false
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_custom_control_dimension__WEBPACK_IMPORTED_MODULE_9__["default"], {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Section (Padding)", "wc-booster"),
    defaultValue: _block_json__WEBPACK_IMPORTED_MODULE_14__.attributes.padding["default"],
    value: padding,
    onChange: padding => setAttributes({
      padding
    })
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_custom_control_dimension__WEBPACK_IMPORTED_MODULE_9__["default"], {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Section (margin)", "wc-booster"),
    defaultValue: _block_json__WEBPACK_IMPORTED_MODULE_14__.attributes.margin["default"],
    value: margin,
    onChange: margin => setAttributes({
      margin
    })
  }))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (InspectorPanel);

/***/ }),

/***/ "./src/blocks/section/components/save.js":
/*!***********************************************!*\
  !*** ./src/blocks/section/components/save.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../constants */ "./src/constants.js");
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../helpers */ "./src/helpers/index.js");




const Save = props => {
  const {
    attributes: {
      block_id,
      bgType,
      enableShapeDivider,
      containerType,
      bgVideo,
      verticalFlip,
      horizontalFlip,
      shape,
      shapePosition
    }
  } = props;
  const renderShape = () => {
    let shapeClass = "";
    if (horizontalFlip) {
      shapeClass += "horizontally-flipped";
    }
    if (verticalFlip) {
      shapeClass += shapeClass.length === 0 ? "" : " ";
      shapeClass += "vertically-flipped";
    }
    return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: `${_constants__WEBPACK_IMPORTED_MODULE_2__.prefix}-section-shape ${shapePosition} ${shapeClass}`
    }, (0,_helpers__WEBPACK_IMPORTED_MODULE_3__.getShapeDivider)(shape, {}));
  };
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    id: block_id,
    className: "wp-block-wc-booster-section"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: `${_constants__WEBPACK_IMPORTED_MODULE_2__.prefix}-${containerType} ${_constants__WEBPACK_IMPORTED_MODULE_2__.prefix}-section-wrapper`
  }, enableShapeDivider && renderShape(), "video" === bgType && !(0,_helpers__WEBPACK_IMPORTED_MODULE_3__.isUndefined)(bgVideo) && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: `${_constants__WEBPACK_IMPORTED_MODULE_2__.prefix}-section-overlay`
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("video", {
    id: `${block_id}-video`,
    autoPlay: true,
    muted: true,
    loop: true
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("source", {
    src: bgVideo.url,
    type: bgVideo.mime
  }), "Your browser does not support HTML5 video.")), "image" === bgType && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: `${_constants__WEBPACK_IMPORTED_MODULE_2__.prefix}-section-overlay`
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: `${_constants__WEBPACK_IMPORTED_MODULE_2__.prefix}-section-inner`
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.InnerBlocks.Content, null))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Save);

/***/ }),

/***/ "./src/blocks/section/index.js":
/*!*************************************!*\
  !*** ./src/blocks/section/index.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles_style_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styles/style.scss */ "./src/blocks/section/styles/style.scss");
/* harmony import */ var _components_edit__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/edit */ "./src/blocks/section/components/edit.js");
/* harmony import */ var _components_save__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/save */ "./src/blocks/section/components/save.js");
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../helpers */ "./src/helpers/index.js");
/* harmony import */ var _helpers_svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../helpers/svg */ "./src/helpers/svg.js");
/* harmony import */ var _block_json__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./block.json */ "./src/blocks/section/block.json");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _components_importer__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../components/importer */ "./src/components/importer.js");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _wordpress_edit_post__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @wordpress/edit-post */ "@wordpress/edit-post");
/* harmony import */ var _wordpress_edit_post__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_wordpress_edit_post__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _wordpress_plugins__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @wordpress/plugins */ "@wordpress/plugins");
/* harmony import */ var _wordpress_plugins__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_wordpress_plugins__WEBPACK_IMPORTED_MODULE_11__);







(0,_helpers__WEBPACK_IMPORTED_MODULE_4__.register)(_block_json__WEBPACK_IMPORTED_MODULE_6__.name, {
  icon: (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 576 512"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M48 115.8C38.2 107 32 94.2 32 80c0-26.5 21.5-48 48-48c14.2 0 27 6.2 35.8 16H460.2c8.8-9.8 21.6-16 35.8-16c26.5 0 48 21.5 48 48c0 14.2-6.2 27-16 35.8V396.2c9.8 8.8 16 21.6 16 35.8c0 26.5-21.5 48-48 48c-14.2 0-27-6.2-35.8-16H115.8c-8.8 9.8-21.6 16-35.8 16c-26.5 0-48-21.5-48-48c0-14.2 6.2-27 16-35.8V115.8zM125.3 96c-4.8 13.6-15.6 24.4-29.3 29.3V386.7c13.6 4.8 24.4 15.6 29.3 29.3H450.7c4.8-13.6 15.6-24.4 29.3-29.3V125.3c-13.6-4.8-24.4-15.6-29.3-29.3H125.3zm2.7 64c0-17.7 14.3-32 32-32H288c17.7 0 32 14.3 32 32v96c0 17.7-14.3 32-32 32H160c-17.7 0-32-14.3-32-32V160zM256 320h32c35.3 0 64-28.7 64-64V224h64c17.7 0 32 14.3 32 32v96c0 17.7-14.3 32-32 32H288c-17.7 0-32-14.3-32-32V320z"
  })),
  edit: _components_edit__WEBPACK_IMPORTED_MODULE_2__["default"],
  save: _components_save__WEBPACK_IMPORTED_MODULE_3__["default"]
});






if (typeof wp.editPost != "undefined") {
  (0,_wordpress_plugins__WEBPACK_IMPORTED_MODULE_11__.registerPlugin)("wc-booster-plugin-sidebar", {
    render: () => (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_edit_post__WEBPACK_IMPORTED_MODULE_10__.PluginBlockSettingsMenuItem, {
      allowedBlocks: _helpers__WEBPACK_IMPORTED_MODULE_4__.insertableBlocks,
      icon: "download",
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_7__.__)("Export To JSON", "wc-booster"),
      onClick: e => {
        const clientId = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_9__.select)("editor").getSelectedBlockClientId();
        (0,_helpers__WEBPACK_IMPORTED_MODULE_4__.exportToJsonFile)(clientId);
      }
    }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_edit_post__WEBPACK_IMPORTED_MODULE_10__.PluginPostStatusInfo, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_importer__WEBPACK_IMPORTED_MODULE_8__["default"], null)))
  });
}

/***/ }),

/***/ "./src/components/exporter.js":
/*!************************************!*\
  !*** ./src/components/exporter.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../helpers */ "./src/helpers/index.js");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__);



const Exporter = ({
  clientId
}) => {
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("button", {
    className: "export-button",
    onClick: e => (0,_helpers__WEBPACK_IMPORTED_MODULE_1__.exportToJsonFile)(clientId)
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Export Block', 'wc-booster'), " ", (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
    className: "dashicons dashicons-download"
  }), " ");
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Exporter);

/***/ }),

/***/ "./src/components/importer.js":
/*!************************************!*\
  !*** ./src/components/importer.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../helpers */ "./src/helpers/index.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../constants */ "./src/constants.js");
/* harmony import */ var reactjs_popup__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! reactjs-popup */ "./node_modules/reactjs-popup/dist/reactjs-popup.esm.js");
/* harmony import */ var react_responsive_masonry__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-responsive-masonry */ "./node_modules/react-responsive-masonry/es/index.js");









const importerName = (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)("Import", "wc-booster");
const importingName = (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)("Importing...", "wc-booster");
const Importer = () => {
  const [open, setOpen] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_3__.useState)(false);
  const [showLoader, setShowLoader] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_3__.useState)(true);
  const [currentParentCategory, setCurrentParentCategory] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_3__.useState)(null);
  const [currentChildCategory, setCurrentChildCategory] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_3__.useState)(null);
  const [data, setData] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_3__.useState)([]);
  const [parent, setParent] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_3__.useState)([]);
  const [demo, setDemo] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_3__.useState)([]);
  const [isFileMode, setIsFileMode] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_3__.useState)(false);
  const [isShowingLatest, setIsShowingLatest] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_3__.useState)(true);
  const [isInserting, setIsInserting] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_3__.useState)(false);
  const [newTag, setNewTag] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_3__.useState)(false);
  const [cache, setCache] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_3__.useState)([]);
  const endPoint = "https://demos.wcbooster.com/wp-json/wp/v2/";
  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_3__.useEffect)(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`${endPoint}demo_category?per_page=100&hide_empty=true&order=asc&orderby=name`);
        const data = await response.json();
        if (data && data.length > 0) {
          const parent = data.filter(node => node.parent == 0 && node.show_in_rise_blocks == 1);
          const currentParentCategory = parent[0].id;
          setParent(parent);
          setData(data);
          setCurrentParentCategory(currentParentCategory);
          getDemo(currentParentCategory);
        }
      } catch (e) {
        hideLoader();
        console.warn(e.message);
        setIsFileMode(true);
      }
    };
    fetchData();
  }, []);
  const fetchChildMenu = (parentId, e) => {
    e.preventDefault();
    setCurrentParentCategory(parentId);
    setIsShowingLatest(true);
    getDemo(parentId);
  };
  const getDemo = (id = false) => {
    setIsFileMode(false);
    if (!id) {
      id = currentChildCategory;
    }
    if (cache[id]) {
      let data = cache[id];
      if (!isShowingLatest) {
        setCurrentChildCategory(id);
      }
      setDemo(data);
      return;
    }
    setShowLoader(true);
    fetch(`${endPoint}single_block_demo?demo_category=${id}&_embed=true&per_page=100&order=desc&orderby=date`).then(response => response.json()).then(res => {
      if (res) {
        setCache(prevState => {
          prevState[id] = res;
          return prevState;
        });
        if (!isShowingLatest) {
          setCurrentChildCategory(id);
        }
        setDemo(res);
      }
    }).finally(() => {
      hideLoader();
    });
  };
  const onOpen = () => {
    setOpen(true);
    jQuery("body").addClass(`${_constants__WEBPACK_IMPORTED_MODULE_6__.prefix}-importer-popup-open`);
  };
  const onClose = () => {
    setOpen(false);
    setIsInserting(false);
    jQuery("body").removeClass(`${_constants__WEBPACK_IMPORTED_MODULE_6__.prefix}-importer-popup-open`);
  };
  const createBlockRecursively = ({
    name,
    attributes,
    inner = false
  }) => {
    if (inner) {
      return (0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_4__.createBlock)(name, attributes, inner.map(node => createBlockRecursively(node)));
    }
    return (0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_4__.createBlock)(name, attributes);
  };
  const insertBlock = (json, e) => {
    setIsInserting(true);
    try {
      e.preventDefault();
      for (var i = 0; i < json.length; i++) {
        const data = json[i];
        if (data.name) {
          var created = createBlockRecursively(data);
          (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_1__.dispatch)("core/block-editor").insertBlock(created);
        }
      }
      onClose();
    } catch (e) {
      setIsInserting(false);
      console.warn(e.message);
    }
  };
  const favData = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_1__.useSelect)(select => {
    const {
      getCurrentUser
    } = select("core");
    const currentUser = getCurrentUser();
    return currentUser;
  });
  const addToFavourite = id => {
    jQuery.post(WBCF.ajax_url, {
      action: "wc_booster_update_user_favourites",
      id,
      security: WBCF.wc_ajax_nonce
    });
  };
  const importFromFile = e => {
    const $input = jQuery(`input[name="${_constants__WEBPACK_IMPORTED_MODULE_6__.prefix}-json-file"]`);
    const $this = jQuery(e.target);
    const file = $input.prop("files")[0];
    $this.blur();
    if (file) {
      $this.addClass("is-busy").text(importingName);
      const reader = new FileReader();
      reader.onload = () => {
        const data = reader.result;
        try {
          const json = JSON.parse(data);
          insertBlock(json, e);
          $input.val("");
        } catch (e) {
          console.warn(e.message);
        }
        insertBlock(reader.result, e);
        $this.removeClass("is-busy").text(importerName);
      };
      reader.readAsText(file);
    }
  };
  const demos = () => {
    let i = (0,_helpers__WEBPACK_IMPORTED_MODULE_5__.findIndex)(data, {
      id: parseInt(currentParentCategory)
    });
    if (data.length == 0) {
      return;
    }
    const slug = data[i].slug;
    const isNew = date => {
      var today = new Date(),
        date = new Date(date);
      var totalMonth = today.getMonth() - date.getMonth() + 12 * (today.getFullYear() - date.getFullYear());
      if (totalMonth <= 1) {
        if (!newTag) {
          setNewTag(true);
        }
        return true;
      }
      return false;
    };
    return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: `${_constants__WEBPACK_IMPORTED_MODULE_6__.prefix}-importer-data-box-wrapper ${_constants__WEBPACK_IMPORTED_MODULE_6__.prefix}-demo-cat-${slug} clearfix`
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react_responsive_masonry__WEBPACK_IMPORTED_MODULE_8__["default"], null, demo.length > 0 && demo.map(node => {
      let img = "https://placehold.co/400x500";
      if (node._embedded && node._embedded["wp:featuredmedia"]) {
        try {
          let temp = node._embedded["wp:featuredmedia"][0].media_details.sizes;
          temp = temp["full"];
          img = temp.source_url;
        } catch (e) {}
      }
      let preview = node.preview_link == "" ? node.link : node.preview_link;
      return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
        key: node.id,
        className: `${_constants__WEBPACK_IMPORTED_MODULE_6__.prefix}-importer-data-box-inner-wrapper`
      }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
        className: `${_constants__WEBPACK_IMPORTED_MODULE_6__.prefix}-importer-data-box`
      }, isNew(node.date) && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
        className: `${_constants__WEBPACK_IMPORTED_MODULE_6__.prefix}-new-block`
      }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", null, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)("New", "wc-booster"))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
        className: `${_constants__WEBPACK_IMPORTED_MODULE_6__.prefix}-importer-data-box-inner`
      }, img && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
        src: img,
        alt: "",
        loading: "lazy",
        style: {
          display: "block",
          width: "100%"
        }
      }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("a", {
        href: preview,
        target: "_blank"
      }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
        className: "dashicons dashicons-visibility"
      }))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
        className: `${_constants__WEBPACK_IMPORTED_MODULE_6__.prefix}-importer-data-box-footer`
      }, node.hide_title == "" && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("h3", null, node.title.rendered), insertButton(node))));
    })));
  };
  const insertButton = node => {
    if (node.is_pro == "" || node.is_pro == "1" && (0,_helpers__WEBPACK_IMPORTED_MODULE_5__.isPro)()) {
      return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("a", {
        href: "#",
        className: `${_constants__WEBPACK_IMPORTED_MODULE_6__.prefix}-insert-button`,
        onClick: e => {
          if (!isInserting) {
            insertBlock(node.demo_json, e);
          }
        }
      }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
        className: "dashicons dashicons-download"
      }), (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)("Insert ", "wc-booster")), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("a", {
        href: "#",
        className: `${_constants__WEBPACK_IMPORTED_MODULE_6__.prefix}-favourite-button ${favData && Object.values(favData.wc_booster_favourites_demo).includes(node.id.toString()) ? "favourite" : ""}`,
        onClick: e => {
          const $this = jQuery(e.currentTarget);
          if ($this.hasClass("favourite")) {
            $this.removeClass("favourite");
          } else {
            $this.addClass("favourite");
          }
          addToFavourite(node.id);
        }
      }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
        className: "dashicons dashicons-heart"
      })));
    }
    return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("a", {
      href: "https://wpactivethemes.com/downloads/all-themes-plan/",
      target: "_blank",
      className: `${_constants__WEBPACK_IMPORTED_MODULE_6__.prefix}-get-pro`
    }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)("Get Pro ", "wc-booster"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
      className: "dashicons dashicons-arrow-right-alt"
    }));
  };
  const hideLoader = () => {
    setShowLoader(false);
  };
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: `${_constants__WEBPACK_IMPORTED_MODULE_6__.prefix}-importer-popup-button`
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("button", {
    onClick: onOpen,
    className: `is-button components-button is-primary is-large ${_constants__WEBPACK_IMPORTED_MODULE_6__.prefix}-importer-trigger`
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
    className: "dashicons dashicons-upload"
  }), (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)("WC Booster Demo Importer", "wc-booster"), newTag && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
    className: `${_constants__WEBPACK_IMPORTED_MODULE_6__.prefix}-new-tag`
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)("New", "wc-booster"))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(reactjs_popup__WEBPACK_IMPORTED_MODULE_7__["default"], {
    open: open,
    closeOnDocumentClick: true,
    onClose: onClose
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "modal wc-booster-modal"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("a", {
    className: "close",
    onClick: onClose
  }, "\xD7"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "content"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: `${_constants__WEBPACK_IMPORTED_MODULE_6__.prefix}-importer-popup-header`
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: `${_constants__WEBPACK_IMPORTED_MODULE_6__.prefix}-importer-popup-title`
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("h2", null, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)("Library", "wc-booster"))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: `${_constants__WEBPACK_IMPORTED_MODULE_6__.prefix}-importer-popup-menu`
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("ul", null, parent.map(node => {
    return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("li", {
      key: node.id
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("a", {
      href: "#",
      className: !isFileMode && currentParentCategory == node.id ? "active-menu" : "",
      onClick: e => fetchChildMenu(node.id, e)
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
      className: `dashicons dashicons-${node.icon_class}`
    }), node.name));
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("li", null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("a", {
    href: "#",
    className: isFileMode ? "active-menu" : "",
    onClick: e => {
      e.preventDefault();
      hideLoader();
      setIsFileMode(true);
    }
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
    className: "dashicons dashicons-media-spreadsheet"
  }), (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)("File", "wc-booster")))))), !isFileMode && !showLoader && demos(), isFileMode && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: `${_constants__WEBPACK_IMPORTED_MODULE_6__.prefix}-importer-data-box-wrapper`
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: `${_constants__WEBPACK_IMPORTED_MODULE_6__.prefix}-import-popup-file`
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("input", {
    type: "file",
    name: `${_constants__WEBPACK_IMPORTED_MODULE_6__.prefix}-json-file`
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("button", {
    onClick: importFromFile,
    className: `button components-button button-primary button-large ${_constants__WEBPACK_IMPORTED_MODULE_6__.prefix}-importer-action`
  }, importerName))), showLoader && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: `${_constants__WEBPACK_IMPORTED_MODULE_6__.prefix}-importer-data-box-wrapper`
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: `${_constants__WEBPACK_IMPORTED_MODULE_6__.prefix}-loader-wrapper`
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: `${_constants__WEBPACK_IMPORTED_MODULE_6__.prefix}-loader-container`
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: `${_constants__WEBPACK_IMPORTED_MODULE_6__.prefix}-loader-item wc-booster-loader-item-1`
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: `${_constants__WEBPACK_IMPORTED_MODULE_6__.prefix}-loader-item wc-booster-loader-item-2`
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: `${_constants__WEBPACK_IMPORTED_MODULE_6__.prefix}-loader-item wc-booster-loader-item-3`
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: `${_constants__WEBPACK_IMPORTED_MODULE_6__.prefix}-loader-item wc-booster-loader-item-4`
  }))))))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Importer);

/***/ }),

/***/ "./src/components/input-group.js":
/*!***************************************!*\
  !*** ./src/components/input-group.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../constants */ "./src/constants.js");



const InputGroup = ({
  lists,
  onChange,
  type,
  className = '',
  updateLinkState,
  isLinkActive,
  property
}) => (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("ul", {
  className: className
}, lists.map((value, index) => (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("li", {
  key: index
}, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.TextControl, {
  type: type,
  value: value,
  onChange: value => {
    onChange(index, value);
  }
}), property && property[index] && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("label", null, property[index]))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("li", null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Button, {
  className: `${_constants__WEBPACK_IMPORTED_MODULE_2__.prefix}-link ${isLinkActive ? 'linked' : ''}`,
  onClick: updateLinkState
}, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
  className: `dashicons ${isLinkActive ? 'dashicons-admin-links' : 'dashicons-editor-unlink'}`
}))));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (InputGroup);

/***/ }),

/***/ "./src/components/responsive-range-control.js":
/*!****************************************************!*\
  !*** ./src/components/responsive-range-control.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ResponsiveRangeControl)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _responsive_view_icons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./responsive-view-icons */ "./src/components/responsive-view-icons.js");
/* harmony import */ var _size_unit__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./size-unit */ "./src/components/size-unit.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../constants */ "./src/constants.js");
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../helpers */ "./src/helpers/index.js");
/* harmony import */ var _custom_control__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../custom-control */ "./src/custom-control/index.js");






class ResponsiveRangeControl extends wp.element.Component {
  handleChange = (property, value) => {
    const oldData = this.getAttributesValues();
    const {
      onChange,
      name
    } = this.props;
    const activeView = (0,_helpers__WEBPACK_IMPORTED_MODULE_4__.getPreviewDevice)();
    const obj = {
      [property]: property === "activeUnit" ? value : {
        [activeView]: value
      }
    };
    const newData = (0,_helpers__WEBPACK_IMPORTED_MODULE_4__.merge)({}, oldData, obj);
    onChange(name, newData);
  };
  getAttributesValues = () => {
    const {
      value
    } = this.props;
    return value ? (0,_helpers__WEBPACK_IMPORTED_MODULE_4__.merge)({}, _constants__WEBPACK_IMPORTED_MODULE_3__.defaultResponsiveRange, value) : _constants__WEBPACK_IMPORTED_MODULE_3__.defaultResponsiveRange;
  };
  render() {
    const {
      label,
      responsiveViews,
      step = "1",
      beforeIcon = "editor-textcolor",
      onChange
    } = this.props;
    const oldData = this.getAttributesValues();
    const {
      activeUnit,
      units = _constants__WEBPACK_IMPORTED_MODULE_3__.sizeUnit,
      values,
      range: {
        min,
        max
      }
    } = oldData;
    const activeView = (0,_helpers__WEBPACK_IMPORTED_MODULE_4__.getPreviewDevice)();
    return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: `${_constants__WEBPACK_IMPORTED_MODULE_3__.prefix}-responsive-range-control`
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: `${_constants__WEBPACK_IMPORTED_MODULE_3__.prefix}-label-section`
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("label", {
      className: "components-base-control__label"
    }, label), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_responsive_view_icons__WEBPACK_IMPORTED_MODULE_1__["default"], {
      responsiveViews: responsiveViews,
      onClick: view => {
        // we need to trigger this to re render the dom
        onChange("", oldData);
      }
    }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_size_unit__WEBPACK_IMPORTED_MODULE_2__["default"], {
      units: units,
      activeUnit: activeUnit,
      onClick: v => this.handleChange("activeUnit", v)
    })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_custom_control__WEBPACK_IMPORTED_MODULE_5__.FontSizeControl, {
      step: step,
      min: min,
      max: max,
      beforeIcon: beforeIcon,
      label: false,
      allowReset: false,
      value: values[activeView],
      onChange: v => this.handleChange("values", v)
    }));
  }
}

/***/ }),

/***/ "./src/components/responsive-view-icons.js":
/*!*************************************************!*\
  !*** ./src/components/responsive-view-icons.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../constants */ "./src/constants.js");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../helpers */ "./src/helpers/index.js");




const ResponsiveViewsIcons = ({
  onClick = e => {},
  responsiveViews,
  className = ""
}) => {
  const activeView = (0,_helpers__WEBPACK_IMPORTED_MODULE_3__.getPreviewDevice)();
  const responsiveViewLists = responsiveViews.map((view, i) => {
    const icon = _constants__WEBPACK_IMPORTED_MODULE_1__.responsiveViewsIcon[view] ? _constants__WEBPACK_IMPORTED_MODULE_1__.responsiveViewsIcon[view] : "";
    return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Button, {
      key: i,
      onClick: () => {
        onClick(view);
        (0,_helpers__WEBPACK_IMPORTED_MODULE_3__.setPreviewDevice)(view);
      },
      className: `${activeView === view ? "active" : ""}`
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
      className: icon
    }));
  });
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.ButtonGroup, {
    className: `${className} ${_constants__WEBPACK_IMPORTED_MODULE_1__.prefix}-responsive-view-icons`
  }, responsiveViewLists);
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ResponsiveViewsIcons);

/***/ }),

/***/ "./src/components/size-unit.js":
/*!*************************************!*\
  !*** ./src/components/size-unit.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../constants */ "./src/constants.js");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__);



const SizeUnit = ({
  onClick = e => {},
  units,
  activeUnit = 'px',
  className = ''
}) => (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.ButtonGroup, {
  className: `${className} ${_constants__WEBPACK_IMPORTED_MODULE_1__.prefix}-size-units`
}, units.map((unit, i) => {
  if (unit == '') {
    return;
  }
  const className = activeUnit === unit ? 'active' : '';
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Button, {
    className: className,
    key: i,
    onClick: e => onClick(unit)
  }, unit);
}));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SizeUnit);

/***/ }),

/***/ "./src/components/tab.js":
/*!*******************************!*\
  !*** ./src/components/tab.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../constants */ "./src/constants.js");





function Tab(props) {
  const [active, setActive] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.useState)(0);
  const onClick = i => e => {
    e.preventDefault();
    setActive(i);
  };
  const {
    data,
    className,
    label
  } = props;
  const titles = data.map((v, i) => {
    let title = typeof v.title === "function" ? v.title() : v.title;
    return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("li", {
      key: i
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("a", {
      href: "#",
      onClick: onClick(i),
      className: ` ${active === i ? "active" : ""} tab-anchor`
    }, title));
  });
  const cls = `${_constants__WEBPACK_IMPORTED_MODULE_4__.prefix}-tab-wrapper ${className}`;
  const content = (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("ul", {
    className: `${_constants__WEBPACK_IMPORTED_MODULE_4__.prefix}-custom-tab`
  }, titles), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: `${_constants__WEBPACK_IMPORTED_MODULE_4__.prefix}-tab-content`
  }, data[active].content()));
  if (label) {
    return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.BaseControl, {
      className: cls,
      label: label
    }, content);
  }
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: cls
  }, content);
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Tab);

/***/ }),

/***/ "./src/constants.js":
/*!**************************!*\
  !*** ./src/constants.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ProvideContextMode: () => (/* binding */ ProvideContextMode),
/* harmony export */   backgroundPosition: () => (/* binding */ backgroundPosition),
/* harmony export */   colors: () => (/* binding */ colors),
/* harmony export */   containerWidth: () => (/* binding */ containerWidth),
/* harmony export */   defaultDimension: () => (/* binding */ defaultDimension),
/* harmony export */   defaultDimensionValue: () => (/* binding */ defaultDimensionValue),
/* harmony export */   defaultFontFamily: () => (/* binding */ defaultFontFamily),
/* harmony export */   defaultFontWeight: () => (/* binding */ defaultFontWeight),
/* harmony export */   defaultResponsiveRange: () => (/* binding */ defaultResponsiveRange),
/* harmony export */   defaultResponsiveViews: () => (/* binding */ defaultResponsiveViews),
/* harmony export */   defaultState: () => (/* binding */ defaultState),
/* harmony export */   defaultTextTransform: () => (/* binding */ defaultTextTransform),
/* harmony export */   defaultViews: () => (/* binding */ defaultViews),
/* harmony export */   faIcons: () => (/* binding */ faIcons),
/* harmony export */   faSocialIcons: () => (/* binding */ faSocialIcons),
/* harmony export */   prefix: () => (/* binding */ prefix),
/* harmony export */   responsiveViewsIcon: () => (/* binding */ responsiveViewsIcon),
/* harmony export */   sizeUnit: () => (/* binding */ sizeUnit)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_hooks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/hooks */ "@wordpress/hooks");
/* harmony import */ var _wordpress_hooks__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_hooks__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__);


const {
  applyFilters
} = (0,_wordpress_hooks__WEBPACK_IMPORTED_MODULE_1__.createHooks)();

const prefix = "wc-booster";
const defaultDimension = ["top", "right", "buttom", "left"];
const sizeUnit = ["px", "em"];
const ProvideContextMode = () => (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("i", null, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)("Please provide context mode as a props", "wc-booster"));
const defaultState = {
  activeUnit: "px",
  isLinkActive: false
};
const containerWidth = {
  activeUnit: "px",
  units: ["px"],
  range: {
    min: 1,
    max: 2000
  },
  values: {
    desktop: 1140,
    tablet: 720,
    mobile: 540
  }
};
const defaultTextTransform = [{
  value: "",
  label: "Initial"
}, {
  value: "inherit",
  label: "Inherit"
}, {
  value: "none",
  label: "None"
}, {
  value: "capitalize",
  label: "Capitalize"
}, {
  value: "uppercase",
  label: "UPPERCASE"
}, {
  value: "lowercase",
  label: "lowercase"
}];
const defaultDimensionValue = {
  activeUnit: "px",
  isLinkActive: false,
  properties: ["top", "right", "bottom", "left"],
  responsiveViews: ["desktop", "tablet", "mobile"],
  units: ["px", "rem"],
  values: {
    desktop: [0, 0, 0, 0],
    tablet: [0, 0, 0, 0],
    mobile: [0, 0, 0, 0]
  }
};
const defaultViews = {
  desktop: [],
  tablet: [],
  mobile: []
};
const defaultFontFamily = applyFilters("wcBoosterFonts", [{
  value: "",
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)("Default", "wc-booster")
}, {
  value: "Lato",
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)("Lato", "wc-booster")
}, {
  value: "Oswald",
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)("Oswald", "wc-booster")
}, {
  value: "Montserrat",
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)("Montserrat", "wc-booster")
}, {
  value: "Roboto",
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)("Roboto", "wc-booster")
}, {
  value: "Raleway",
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)("Raleway", "wc-booster")
}, {
  value: "Playfair Display",
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)("Playfair Display", "wc-booster")
}, {
  value: "Fjalla One",
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)("Fjalla One", "wc-booster")
}, {
  value: "Alegreya Sans",
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)("Alegreya Sans", "wc-booster")
}, {
  value: "PT Sans Narrow",
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)("PT Sans Narrow", "wc-booster")
}, {
  value: "Open Sans",
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)("Open Sans", "wc-booster")
}]);
const defaultFontWeight = [{
  value: 300,
  label: 300
}, {
  value: 400,
  label: 400
}, {
  value: 500,
  label: 500
}, {
  value: 600,
  label: 600
}, {
  value: 700,
  label: 700
}, {
  value: 800,
  label: 800
}, {
  value: 900,
  label: 900
}];
const responsiveViewsIcon = {
  desktop: "dashicons dashicons-desktop",
  tablet: "dashicons dashicons-tablet",
  mobile: "dashicons dashicons-smartphone"
};
const defaultResponsiveViews = ["desktop", "tablet", "mobile"];
const defaultResponsiveRange = {
  activeUnit: "px",
  range: {
    min: 0,
    max: 100
  },
  values: {
    desktop: 0,
    tablet: 0,
    mobile: 0
  }
};
const colors = [{
  name: "white",
  color: "#ffffff"
}, {
  name: "red",
  color: "#fc5b62"
}, {
  name: "blue",
  color: "#0693e3"
}, {
  name: "light grey",
  color: "#eeeeee"
}, {
  name: "black",
  color: "#000"
}];
const backgroundPosition = [{
  label: "default",
  value: ""
}, {
  label: "top left",
  value: "top left"
}, {
  label: "top center",
  value: "top center"
}, {
  label: "top right",
  value: "top right"
}, {
  label: "center left",
  value: "center left"
}, {
  label: "center center",
  value: "center center"
}, {
  label: "center right",
  value: "center right"
}, {
  label: "bottom left",
  value: "bottom left"
}, {
  label: "bottom center",
  value: "bottom center"
}, {
  label: "bottom right",
  value: "bottom right"
}];
const faSocialIcons = ["fa-facebook", "fa-facebook-f", "fa-facebook-official", "fa-facebook-square", "fa-flickr", "fa-google", "fa-google-plus", "fa-google-plus-circle", "fa-google-plus-official", "fa-google-plus-square", "fa-google-wallet", "fa-instagram", "fa-linkedin", "fa-linkedin-square", "fa-pinterest", "fa-pinterest-p", "fa-pinterest-square", "fa-twitter", "fa-twitter-square", "fa-qq", "fa-quora", "fa-reddit", "fa-reddit-alien", "fa-reddit-square", "fa-skype", "fa-snapchat", "fa-snapchat-ghost", "fa-stumbleupon", "fa-stumbleupon-circle", "fa-snapchat-square", "fa-telegram", "fa-tumblr", "fa-tumblr-square", "fa-vimeo", "fa-vimeo-square", "fa-vine", "fa-wechat", "fa-whatsapp", "fa-yahoo", "fa-youtube", "fa-youtube-play", "fa-youtube-square"];
const faIcons = ["fa-500px", "fa-address-book", "fa-address-book-o", "fa-address-card", "fa-address-card-o", "fa-adjust", "fa-adn", "fa-align-center", "fa-align-justify", "fa-align-left", "fa-align-right", "fa-amazon", "fa-ambulance", "fa-american-sign-language-interpreting", "fa-anchor", "fa-android", "fa-angellist", "fa-angle-double-down", "fa-angle-double-left", "fa-angle-double-right", "fa-angle-double-up", "fa-angle-down", "fa-angle-left", "fa-angle-right", "fa-angle-up", "fa-apple", "fa-archive", "fa-area-chart", "fa-arrow-circle-down", "fa-arrow-circle-left", "fa-arrow-circle-o-down", "fa-arrow-circle-o-left", "fa-arrow-circle-o-right", "fa-arrow-circle-o-up", "fa-arrow-circle-right", "fa-arrow-circle-up", "fa-arrow-down", "fa-arrow-left", "fa-arrow-right", "fa-arrow-up", "fa-arrows", "fa-arrows-alt", "fa-arrows-h", "fa-arrows-v", "fa-asl-interpreting", "fa-assistive-listening-systems", "fa-asterisk", "fa-at", "fa-audio-description", "fa-automobile", "fa-backward", "fa-balance-scale", "fa-ban", "fa-bandcamp", "fa-bank", "fa-bar-chart", "fa-bar-chart-o", "fa-barcode", "fa-bars", "fa-bath", "fa-bathtub", "fa-battery", "fa-battery-0", "fa-battery-1", "fa-battery-2", "fa-battery-3", "fa-battery-4", "fa-battery-empty", "fa-battery-full", "fa-battery-half", "fa-battery-quarter", "fa-battery-three-quarters", "fa-bed", "fa-beer", "fa-behance", "fa-behance-square", "fa-bell", "fa-bell-o", "fa-bell-slash", "fa-bell-slash-o", "fa-bicycle", "fa-binoculars", "fa-birthday-cake", "fa-bitbucket", "fa-bitbucket-square", "fa-bitcoin", "fa-black-tie", "fa-blind", "fa-bluetooth", "fa-bluetooth-b", "fa-bold", "fa-bolt", "fa-bomb", "fa-book", "fa-bookmark", "fa-bookmark-o", "fa-braille", "fa-briefcase", "fa-btc", "fa-bug", "fa-building", "fa-building-o", "fa-bullhorn", "fa-bullseye", "fa-bus", "fa-buysellads", "fa-cab", "fa-calculator", "fa-calendar", "fa-calendar-check-o", "fa-calendar-minus-o", "fa-calendar-o", "fa-calendar-plus-o", "fa-calendar-times-o", "fa-camera", "fa-camera-retro", "fa-car", "fa-caret-down", "fa-caret-left", "fa-caret-right", "fa-caret-square-o-down", "fa-caret-square-o-left", "fa-caret-square-o-right", "fa-caret-square-o-up", "fa-caret-up", "fa-cart-arrow-down", "fa-cart-plus", "fa-cc", "fa-cc-amex", "fa-cc-diners-club", "fa-cc-discover", "fa-cc-jcb", "fa-cc-mastercard", "fa-cc-paypal", "fa-cc-stripe", "fa-cc-visa", "fa-certificate", "fa-chain", "fa-chain-broken", "fa-check", "fa-check-circle", "fa-check-circle-o", "fa-check-square", "fa-check-square-o", "fa-chevron-circle-down", "fa-chevron-circle-left", "fa-chevron-circle-right", "fa-chevron-circle-up", "fa-chevron-down", "fa-chevron-left", "fa-chevron-right", "fa-chevron-up", "fa-child", "fa-chrome", "fa-circle", "fa-circle-o", "fa-circle-o-notch", "fa-circle-thin", "fa-clipboard", "fa-clock-o", "fa-clone", "fa-close", "fa-cloud", "fa-cloud-download", "fa-cloud-upload", "fa-cny", "fa-code", "fa-code-fork", "fa-codepen", "fa-codiepie", "fa-coffee", "fa-cog", "fa-cogs", "fa-columns", "fa-comment", "fa-comment-o", "fa-commenting", "fa-commenting-o", "fa-comments", "fa-comments-o", "fa-compass", "fa-compress", "fa-connectdevelop", "fa-contao", "fa-copy", "fa-copyright", "fa-creative-commons", "fa-credit-card", "fa-credit-card-alt", "fa-crop", "fa-crosshairs", "fa-css3", "fa-cube", "fa-cubes", "fa-cut", "fa-cutlery", "fa-dashboard", "fa-dashcube", "fa-database", "fa-deaf", "fa-deafness", "fa-dedent", "fa-delicious", "fa-desktop", "fa-deviantart", "fa-diamond", "fa-digg", "fa-dollar", "fa-dot-circle-o", "fa-download", "fa-dribbble", "fa-drivers-license", "fa-drivers-license-o", "fa-dropbox", "fa-drupal", "fa-edge", "fa-edit", "fa-eercast", "fa-eject", "fa-ellipsis-h", "fa-ellipsis-v", "fa-empire", "fa-envelope", "fa-envelope-o", "fa-envelope-open", "fa-envelope-open-o", "fa-envelope-square", "fa-envira", "fa-eraser", "fa-etsy", "fa-eur", "fa-euro", "fa-exchange", "fa-exclamation", "fa-exclamation-circle", "fa-exclamation-triangle", "fa-expand", "fa-expeditedssl", "fa-external-link", "fa-external-link-square", "fa-eye", "fa-eye-slash", "fa-eyedropper", "fa-fa", "fa-facebook", "fa-facebook-f", "fa-facebook-official", "fa-facebook-square", "fa-fast-backward", "fa-fast-forward", "fa-fax", "fa-feed", "fa-female", "fa-fighter-jet", "fa-file", "fa-file-archive-o", "fa-file-audio-o", "fa-file-code-o", "fa-file-excel-o", "fa-file-image-o", "fa-file-movie-o", "fa-file-o", "fa-file-pdf-o", "fa-file-photo-o", "fa-file-picture-o", "fa-file-powerpoint-o", "fa-file-sound-o", "fa-file-text", "fa-file-text-o", "fa-file-video-o", "fa-file-word-o", "fa-file-zip-o", "fa-files-o", "fa-film", "fa-filter", "fa-fire", "fa-fire-extinguisher", "fa-firefox", "fa-first-order", "fa-flag", "fa-flag-checkered", "fa-flag-o", "fa-flash", "fa-flask", "fa-flickr", "fa-floppy-o", "fa-folder", "fa-folder-o", "fa-folder-open", "fa-folder-open-o", "fa-font", "fa-font-awesome", "fa-fonticons", "fa-fort-awesome", "fa-forumbee", "fa-forward", "fa-foursquare", "fa-free-code-camp", "fa-frown-o", "fa-futbol-o", "fa-gamepad", "fa-gavel", "fa-gbp", "fa-ge", "fa-gear", "fa-gears", "fa-genderless", "fa-get-pocket", "fa-gg", "fa-gg-circle", "fa-gift", "fa-git", "fa-git-square", "fa-github", "fa-github-alt", "fa-github-square", "fa-gitlab", "fa-gittip", "fa-glass", "fa-glide", "fa-glide-g", "fa-globe", "fa-google", "fa-google-plus", "fa-google-plus-circle", "fa-google-plus-official", "fa-google-plus-square", "fa-google-wallet", "fa-graduation-cap", "fa-gratipay", "fa-grav", "fa-group", "fa-h-square", "fa-hacker-news", "fa-hand-grab-o", "fa-hand-lizard-o", "fa-hand-o-down", "fa-hand-o-left", "fa-hand-o-right", "fa-hand-o-up", "fa-hand-paper-o", "fa-hand-peace-o", "fa-hand-pointer-o", "fa-hand-rock-o", "fa-hand-scissors-o", "fa-hand-spock-o", "fa-hand-stop-o", "fa-handshake-o", "fa-hard-of-hearing", "fa-hashtag", "fa-hdd-o", "fa-header", "fa-headphones", "fa-heart", "fa-heart-o", "fa-heartbeat", "fa-history", "fa-home", "fa-hospital-o", "fa-hotel", "fa-hourglass", "fa-hourglass-1", "fa-hourglass-2", "fa-hourglass-3", "fa-hourglass-end", "fa-hourglass-half", "fa-hourglass-o", "fa-hourglass-start", "fa-houzz", "fa-html5", "fa-i-cursor", "fa-id-badge", "fa-id-card", "fa-id-card-o", "fa-ils", "fa-image", "fa-imdb", "fa-inbox", "fa-indent", "fa-industry", "fa-info", "fa-info-circle", "fa-inr", "fa-instagram", "fa-institution", "fa-internet-explorer", "fa-intersex", "fa-ioxhost", "fa-italic", "fa-joomla", "fa-jpy", "fa-jsfiddle", "fa-key", "fa-keyboard-o", "fa-krw", "fa-language", "fa-laptop", "fa-lastfm", "fa-lastfm-square", "fa-leaf", "fa-leanpub", "fa-legal", "fa-lemon-o", "fa-level-down", "fa-level-up", "fa-life-bouy", "fa-life-buoy", "fa-life-ring", "fa-life-saver", "fa-lightbulb-o", "fa-line-chart", "fa-link", "fa-linkedin", "fa-linkedin-square", "fa-linode", "fa-linux", "fa-list", "fa-list-alt", "fa-list-ol", "fa-list-ul", "fa-location-arrow", "fa-lock", "fa-long-arrow-down", "fa-long-arrow-left", "fa-long-arrow-right", "fa-long-arrow-up", "fa-low-vision", "fa-magic", "fa-magnet", "fa-mail-forward", "fa-mail-reply", "fa-mail-reply-all", "fa-male", "fa-map", "fa-map-marker", "fa-map-o", "fa-map-pin", "fa-map-signs", "fa-mars", "fa-mars-double", "fa-mars-stroke", "fa-mars-stroke-h", "fa-mars-stroke-v", "fa-maxcdn", "fa-meanpath", "fa-medium", "fa-medkit", "fa-meetup", "fa-meh-o", "fa-mercury", "fa-microchip", "fa-microphone", "fa-microphone-slash", "fa-minus", "fa-minus-circle", "fa-minus-square", "fa-minus-square-o", "fa-mixcloud", "fa-mobile", "fa-mobile-phone", "fa-modx", "fa-money", "fa-moon-o", "fa-mortar-board", "fa-motorcycle", "fa-mouse-pointer", "fa-music", "fa-navicon", "fa-neuter", "fa-newspaper-o", "fa-object-group", "fa-object-ungroup", "fa-odnoklassniki", "fa-odnoklassniki-square", "fa-opencart", "fa-openid", "fa-opera", "fa-optin-monster", "fa-outdent", "fa-pagelines", "fa-paint-brush", "fa-paper-plane", "fa-paper-plane-o", "fa-paperclip", "fa-paragraph", "fa-paste", "fa-pause", "fa-pause-circle", "fa-pause-circle-o", "fa-paw", "fa-paypal", "fa-pencil", "fa-pencil-square", "fa-pencil-square-o", "fa-percent", "fa-phone", "fa-phone-square", "fa-photo", "fa-picture-o", "fa-pie-chart", "fa-pied-piper", "fa-pied-piper-alt", "fa-pied-piper-pp", "fa-pinterest", "fa-pinterest-p", "fa-pinterest-square", "fa-plane", "fa-play", "fa-play-circle", "fa-play-circle-o", "fa-plug", "fa-plus", "fa-plus-circle", "fa-plus-square", "fa-plus-square-o", "fa-podcast", "fa-power-off", "fa-print", "fa-product-hunt", "fa-puzzle-piece", "fa-qq", "fa-qrcode", "fa-question", "fa-question-circle", "fa-question-circle-o", "fa-quora", "fa-quote-left", "fa-quote-right", "fa-ra", "fa-random", "fa-ravelry", "fa-rebel", "fa-recycle", "fa-reddit", "fa-reddit-alien", "fa-reddit-square", "fa-refresh", "fa-registered", "fa-remove", "fa-renren", "fa-reorder", "fa-repeat", "fa-reply", "fa-reply-all", "fa-resistance", "fa-retweet", "fa-rmb", "fa-road", "fa-rocket", "fa-rotate-left", "fa-rotate-right", "fa-rouble", "fa-rss", "fa-rss-square", "fa-rub", "fa-ruble", "fa-rupee", "fa-s15", "fa-safari", "fa-save", "fa-scissors", "fa-scribd", "fa-search", "fa-search-minus", "fa-search-plus", "fa-sellsy", "fa-send", "fa-send-o", "fa-server", "fa-share", "fa-share-alt", "fa-share-alt-square", "fa-share-square", "fa-share-square-o", "fa-shekel", "fa-sheqel", "fa-shield", "fa-ship", "fa-shirtsinbulk", "fa-shopping-bag", "fa-shopping-basket", "fa-shopping-cart", "fa-shower", "fa-sign-in", "fa-sign-language", "fa-sign-out", "fa-signal", "fa-signing", "fa-simplybuilt", "fa-sitemap", "fa-skyatlas", "fa-skype", "fa-slack", "fa-sliders", "fa-slideshare", "fa-smile-o", "fa-snapchat", "fa-snapchat-ghost", "fa-snapchat-square", "fa-snowflake-o", "fa-soccer-ball-o", "fa-sort", "fa-sort-alpha-asc", "fa-sort-alpha-desc", "fa-sort-amount-asc", "fa-sort-amount-desc", "fa-sort-asc", "fa-sort-desc", "fa-sort-down", "fa-sort-numeric-asc", "fa-sort-numeric-desc", "fa-sort-up", "fa-soundcloud", "fa-space-shuttle", "fa-spinner", "fa-spoon", "fa-spotify", "fa-square", "fa-square-o", "fa-stack-exchange", "fa-stack-overflow", "fa-star", "fa-star-half", "fa-star-half-empty", "fa-star-half-full", "fa-star-half-o", "fa-star-o", "fa-steam", "fa-steam-square", "fa-step-backward", "fa-step-forward", "fa-stethoscope", "fa-sticky-note", "fa-sticky-note-o", "fa-stop", "fa-stop-circle", "fa-stop-circle-o", "fa-street-view", "fa-strikethrough", "fa-stumbleupon", "fa-stumbleupon-circle", "fa-subscript", "fa-subway", "fa-suitcase", "fa-sun-o", "fa-superpowers", "fa-superscript", "fa-support", "fa-table", "fa-tablet", "fa-tachometer", "fa-tag", "fa-tags", "fa-tasks", "fa-taxi", "fa-telegram", "fa-television", "fa-tencent-weibo", "fa-terminal", "fa-text-height", "fa-text-width", "fa-th", "fa-th-large", "fa-th-list", "fa-themeisle", "fa-thermometer", "fa-thermometer-0", "fa-thermometer-1", "fa-thermometer-2", "fa-thermometer-3", "fa-thermometer-4", "fa-thermometer-empty", "fa-thermometer-full", "fa-thermometer-half", "fa-thermometer-quarter", "fa-thermometer-three-quarters", "fa-thumb-tack", "fa-thumbs-down", "fa-thumbs-o-down", "fa-thumbs-o-up", "fa-thumbs-up", "fa-ticket", "fa-times", "fa-times-circle", "fa-times-circle-o", "fa-times-rectangle", "fa-times-rectangle-o", "fa-tint", "fa-toggle-down", "fa-toggle-left", "fa-toggle-off", "fa-toggle-on", "fa-toggle-right", "fa-toggle-up", "fa-trademark", "fa-train", "fa-transgender", "fa-transgender-alt", "fa-trash", "fa-trash-o", "fa-tree", "fa-trello", "fa-tripadvisor", "fa-trophy", "fa-truck", "fa-try", "fa-tty", "fa-tumblr", "fa-tumblr-square", "fa-turkish-lira", "fa-tv", "fa-twitch", "fa-twitter", "fa-twitter-square", "fa-umbrella", "fa-underline", "fa-undo", "fa-universal-access", "fa-university", "fa-unlink", "fa-unlock", "fa-unlock-alt", "fa-unsorted", "fa-upload", "fa-usb", "fa-usd", "fa-user", "fa-user-circle", "fa-user-circle-o", "fa-user-md", "fa-user-o", "fa-user-plus", "fa-user-secret", "fa-user-times", "fa-users", "fa-vcard", "fa-vcard-o", "fa-venus", "fa-venus-double", "fa-venus-mars", "fa-viacoin", "fa-viadeo", "fa-viadeo-square", "fa-video-camera", "fa-vimeo", "fa-vimeo-square", "fa-vine", "fa-vk", "fa-volume-control-phone", "fa-volume-down", "fa-volume-off", "fa-volume-up", "fa-warning", "fa-wechat", "fa-weibo", "fa-weixin", "fa-whatsapp", "fa-wheelchair", "fa-wheelchair-alt", "fa-wifi", "fa-wikipedia-w", "fa-window-close", "fa-window-close-o", "fa-window-maximize", "fa-window-minimize", "fa-window-restore", "fa-windows", "fa-won", "fa-wordpress", "fa-wpbeginner", "fa-wpexplorer", "fa-wpforms", "fa-wrench", "fa-xing", "fa-xing-square", "fa-y-combinator", "fa-y-combinator-square", "fa-yahoo", "fa-yc", "fa-yc-square", "fa-yelp", "fa-yen", "fa-yoast", "fa-youtube", "fa-youtube-play", "fa-youtube-square"];

/***/ }),

/***/ "./src/custom-control/dimension.js":
/*!*****************************************!*\
  !*** ./src/custom-control/dimension.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_responsive_view_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/responsive-view-icons */ "./src/components/responsive-view-icons.js");
/* harmony import */ var _components_size_unit__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/size-unit */ "./src/components/size-unit.js");
/* harmony import */ var _components_input_group__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/input-group */ "./src/components/input-group.js");
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../helpers */ "./src/helpers/index.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../constants */ "./src/constants.js");




/* Custom components */





/* Others */

const DimensionControl = props => {
  const {
    label,
    onChange = () => {}
  } = props;
  const getData = () => {
    const {
      value = {}
    } = props;
    const {
      values,
      ...defaultDimensionValueRest
    } = _constants__WEBPACK_IMPORTED_MODULE_7__.defaultDimensionValue;
    const data = {
      ...defaultDimensionValueRest,
      ...value
    };
    const {
      properties,
      responsiveViews
    } = data;
    return {
      ...data,
      values: value.values ? getViewData(properties, data.values, responsiveViews) : getViewData(properties, values, responsiveViews)
    };
  };
  const getViewData = (properties, responsiveValues, responsiveViews) => {
    let viewData = {};
    responsiveViews.forEach((v, i) => {
      let value = responsiveValues[v];
      let currentValue = properties.map((p, i) => value && value.length - 1 >= i ? value[i] : 0);
      viewData = {
        ...viewData,
        [v]: currentValue
      };
    });
    return viewData;
  };
  const handleChange = (name, data) => {
    const oldData = getData();
    const {
      isLinkActive,
      values
    } = oldData;
    let newData = {};
    if ("updateValues" === name) {
      let {
        index,
        value
      } = data;
      newData = (0,_helpers__WEBPACK_IMPORTED_MODULE_6__.merge)({}, oldData, {
        values: {
          [activeView]: isLinkActive ? values[activeView].map(() => parseInt(value)) : values[activeView].map((v, i) => index === i ? parseInt(value) : v)
        }
      });
    } else if ("updateLink" === name) {
      newData = (0,_helpers__WEBPACK_IMPORTED_MODULE_6__.merge)({}, oldData, {
        isLinkActive: !isLinkActive
      });
    } else if ("updateUnit" === name) {
      newData = (0,_helpers__WEBPACK_IMPORTED_MODULE_6__.merge)({}, oldData, {
        activeUnit: data
      });
    }
    onChange(newData);
  };
  const reset = () => {
    const {
      defaultValue
    } = props;
    defaultValue && onChange(defaultValue);
  };
  const {
    responsiveViews,
    isLinkActive,
    activeUnit,
    units,
    values,
    properties
  } = getData();
  const activeView = (0,_helpers__WEBPACK_IMPORTED_MODULE_6__.getPreviewDevice)();
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: `${_constants__WEBPACK_IMPORTED_MODULE_7__.prefix}-dimension-input`
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: `${_constants__WEBPACK_IMPORTED_MODULE_7__.prefix}-label-section`,
    style: {
      display: "flex"
    }
  }, label && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("label", {
    // The inline styling is used here instead of the CSS file because
    // This styling is only required in this specific case.
    style: {
      maxWidth: "45%"
    },
    className: "components-base-control__label"
  }, label), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_responsive_view_icons__WEBPACK_IMPORTED_MODULE_3__["default"], {
    responsiveViews: responsiveViews,
    activeView: activeView,
    onClick: view => {
      onChange(getData());
    }
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_size_unit__WEBPACK_IMPORTED_MODULE_4__["default"], {
    units: units,
    activeUnit: activeUnit,
    onClick: unit => handleChange("updateUnit", unit)
  })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: `${_constants__WEBPACK_IMPORTED_MODULE_7__.prefix}-controller`
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: `${_constants__WEBPACK_IMPORTED_MODULE_7__.prefix}-lists`
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_input_group__WEBPACK_IMPORTED_MODULE_5__["default"], {
    property: properties,
    isLinkActive: isLinkActive,
    updateLinkState: () => handleChange("updateLink"),
    type: "number",
    lists: values[activeView],
    onChange: (i, v) => handleChange("updateValues", {
      index: i,
      value: v
    })
  }))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: `${_constants__WEBPACK_IMPORTED_MODULE_7__.prefix}-btn-reset-wrapper`
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Button, {
    onClick: reset,
    className: `is-button is-default is-small`
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)("Reset", "wc-booster"))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DimensionControl);
(0,_helpers__WEBPACK_IMPORTED_MODULE_6__.globalize)("DimensionControl", DimensionControl);

/***/ }),

/***/ "./src/custom-control/image-control.js":
/*!*********************************************!*\
  !*** ./src/custom-control/image-control.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../helpers */ "./src/helpers/index.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../constants */ "./src/constants.js");
/* harmony import */ var _custom_control__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../custom-control */ "./src/custom-control/index.js");







const ImageControl = props => {
  const defaultSize = "full";
  const getValue = () => {
    const {
      value
    } = props;
    if (typeof value === "undefined") {
      return {
        size: defaultSize,
        url: undefined
      };
    }
    return value;
  };
  const onRender = ({
    open
  }) => {
    const onRemove = e => {
      e.preventDefault();
      props.onSelect({
        ...getValue(),
        url: ""
      });
    };
    const style = {};
    const {
      url,
      size
    } = getValue();
    if (url) {
      style.backgroundImage = `url(${url})`;
    }
    return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: `${_constants__WEBPACK_IMPORTED_MODULE_5__.prefix}-image-uploader`
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: `${_constants__WEBPACK_IMPORTED_MODULE_5__.prefix}-image-uploader-wrapper`
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: `${_constants__WEBPACK_IMPORTED_MODULE_5__.prefix}-button-wrapper`
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("button", {
      onClick: open,
      className: `${_constants__WEBPACK_IMPORTED_MODULE_5__.prefix}-image-uploader-trigger`,
      style: style
    }), url && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("button", {
      className: `${_constants__WEBPACK_IMPORTED_MODULE_5__.prefix}-image-uploader-delete`,
      isDestructive: true,
      onClick: onRemove
    }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Delete Image", "wc-booster")))), url && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_custom_control__WEBPACK_IMPORTED_MODULE_6__.ImageSizeControl, {
      value: size,
      onChange: v => {
        onSelect(v, "size");
      }
    }));
  };
  const onSelect = (v, type) => {
    let d;
    if ("image" === type) {
      let {
        size = defaultSize
      } = getValue();
      const {
        url,
        height,
        width
      } = (0,_helpers__WEBPACK_IMPORTED_MODULE_4__.isUndefined)(v.sizes[size]) ? v.sizes[defaultSize] : v.sizes[size];
      d = {
        size,
        id: v.id,
        alt: v.alt,
        url,
        height,
        width,
        sizes: v.sizes
      };
    } else {
      let {
        sizes,
        alt,
        id
      } = getValue();
      let size = (0,_helpers__WEBPACK_IMPORTED_MODULE_4__.isUndefined)(sizes[v]) ? defaultSize : v;
      const {
        url,
        height,
        width
      } = sizes[size];
      d = {
        size: v,
        id,
        alt,
        url,
        height,
        width,
        sizes
      };
    }
    props.onSelect(d);
  };
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.MediaUploadCheck, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.MediaUpload, {
    gallery: false,
    multiple: false,
    onSelect: v => {
      onSelect(v, "image");
    },
    allowedTypes: ["image"],
    value: props.value,
    render: onRender
  })));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ImageControl);
(0,_helpers__WEBPACK_IMPORTED_MODULE_4__.globalize)("ImageControl", ImageControl);

/***/ }),

/***/ "./src/custom-control/index.js":
/*!*************************************!*\
  !*** ./src/custom-control/index.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BackgroundOverlayControl: () => (/* binding */ BackgroundOverlayControl),
/* harmony export */   BackgroundPosition: () => (/* binding */ BackgroundPosition),
/* harmony export */   BgControl: () => (/* binding */ BgControl),
/* harmony export */   BorderStyleControl: () => (/* binding */ BorderStyleControl),
/* harmony export */   BorderWidthControl: () => (/* binding */ BorderWidthControl),
/* harmony export */   ColorControl: () => (/* binding */ ColorControl),
/* harmony export */   ExcerptLengthControl: () => (/* binding */ ExcerptLengthControl),
/* harmony export */   FixedBackgroundColor: () => (/* binding */ FixedBackgroundColor),
/* harmony export */   FontSizeControl: () => (/* binding */ FontSizeControl),
/* harmony export */   HeadingTagControl: () => (/* binding */ HeadingTagControl),
/* harmony export */   HtmlTagControl: () => (/* binding */ HtmlTagControl),
/* harmony export */   ImageSizeControl: () => (/* binding */ ImageSizeControl),
/* harmony export */   ItemPerRowControl: () => (/* binding */ ItemPerRowControl),
/* harmony export */   LinkControl: () => (/* binding */ LinkControl),
/* harmony export */   OpacityControl: () => (/* binding */ OpacityControl),
/* harmony export */   PanelColor: () => (/* binding */ PanelColor),
/* harmony export */   RadiusControl: () => (/* binding */ RadiusControl),
/* harmony export */   SpacingControl: () => (/* binding */ SpacingControl),
/* harmony export */   SwitchControl: () => (/* binding */ SwitchControl),
/* harmony export */   ThicknessControl: () => (/* binding */ ThicknessControl),
/* harmony export */   WidthControl: () => (/* binding */ WidthControl)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../constants */ "./src/constants.js");





const ItemPerRowControl = ({
  label,
  onChange,
  ...rest
}) => (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.TextControl, {
  label: label ? label : (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Number of Items per Row', 'wc-booster'),
  type: "number",
  min: 1,
  max: 4,
  onChange: perRow => onChange(parseInt(perRow)),
  ...rest
});
const HeadingTagControl = ({
  label,
  ...rest
}) => (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.SelectControl, {
  label: label ? label : (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Tag', 'wc-booster'),
  options: [{
    label: 'H1',
    value: 'h1'
  }, {
    label: 'H2',
    value: 'h2'
  }, {
    label: 'H3',
    value: 'h3'
  }, {
    label: 'H4',
    value: 'h4'
  }, {
    label: 'H5',
    value: 'h5'
  }, {
    label: 'H6',
    value: 'h6'
  }, {
    label: 'Span',
    value: 'span'
  }, {
    label: 'P',
    value: 'p'
  }],
  ...rest
});
const HtmlTagControl = ({
  label,
  ...rest
}) => (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.SelectControl, {
  label: label ? label : (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Tag', 'wc-booster'),
  options: [{
    label: 'H1',
    value: 'h1'
  }, {
    label: 'div',
    value: 'div'
  }, {
    label: 'p',
    value: 'p'
  }],
  ...rest
});
const BackgroundPosition = ({
  label,
  onChange,
  ...rest
}) => (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.SelectControl, {
  label: label || (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Background Position', 'wc-booster'),
  options: _constants__WEBPACK_IMPORTED_MODULE_4__.backgroundPosition,
  onChange: backgroundPosition => onChange(backgroundPosition),
  ...rest
});
const FontSizeControl = ({
  label,
  allowReset = true,
  ...rest
}) => (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.RangeControl, {
  label: label === false ? false : label ? label : (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Font Size', 'wc-booster'),
  allowReset: allowReset,
  min: 10,
  max: 100,
  beforeIcon: "editor-textcolor",
  ...rest
});
const ThicknessControl = props => (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.RangeControl, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Thickness', 'wc-booster'),
  allowReset: true,
  min: 1,
  max: 50,
  ...props
});
const BorderWidthControl = props => (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.RangeControl, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Border Width', 'wc-booster'),
  allowReset: true,
  min: 0,
  max: 50,
  ...props
});
const WidthControl = props => (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.RangeControl, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Width', 'wc-booster'),
  allowReset: true,
  min: 1,
  max: 120,
  ...props
});
const OpacityControl = ({
  label,
  ...rest
}) => (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.RangeControl, {
  label: label ? label : (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Opacity', 'wc-booster'),
  allowReset: true,
  step: 0.1,
  min: 0,
  max: 1,
  ...rest
});
const SpacingControl = ({
  label,
  beforeIcon,
  ...rest
}) => (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.RangeControl, {
  label: label ? label : (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Spacing', 'wc-booster'),
  beforeIcon: beforeIcon ? beforeIcon : "arrow-down-alt",
  allowReset: true,
  min: 0,
  max: 100,
  ...rest
});
const ColorControl = ({
  label,
  hideIndicator,
  ...rest
}) => {
  const color = (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.ColorPalette, {
    className: "editor-color-palette-control__color-palette",
    colors: _constants__WEBPACK_IMPORTED_MODULE_4__.colors,
    ...rest
  });
  let indicator = false;
  if (hideIndicator) {
    return color;
  } else {
    indicator = (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, label ? label : (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Color', 'wc-booster'), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.ColorIndicator, {
      colorValue: rest.value
    }));
    return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.BaseControl, {
      label: indicator
    }, color);
  }
};
const BackgroundOverlayControl = ({
  label,
  onChange,
  value,
  ...rest
}) => {
  const indicator = (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, label ? label : (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Background Overlay', 'wc-booster'), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.ColorIndicator, {
    colorValue: value
  }));
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.BaseControl, {
    label: indicator
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.ColorPicker, {
    color: value,
    onChangeComplete: ({
      rgb
    }) => onChange(`rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, ${rgb.a} )`),
    ...rest
  }));
};
const BgControl = ({
  label,
  ...rest
}) => (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.SelectControl, {
  label: label ? label : (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Background Type', 'wc-booster'),
  options: [{
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Image', 'wc-booster'),
    value: 'image'
  }, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Color', 'wc-booster'),
    value: 'color'
  }, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Video', 'wc-booster'),
    value: 'video'
  }],
  ...rest
});
const ImageSizeControl = ({
  label,
  ...rest
}) => (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.SelectControl, {
  label: label ? label : (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Image Size', 'wc-booster'),
  options: WC_Booster_VAR.image_size.filter(v => 'medium_large' != v).map(v => ({
    label: v,
    value: v
  })),
  ...rest
});
const LinkControl = ({
  label,
  ...rest
}) => (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.TextControl, {
  label: label ? label : (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('URL', 'wc-booster'),
  type: "url",
  ...rest
});
const BorderStyleControl = ({
  label,
  ...rest
}) => (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.SelectControl, {
  label: label ? label : (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Border Style', 'wc-booster'),
  options: [{
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('None', 'wc-booster'),
    value: 'none'
  }, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Solid', 'wc-booster'),
    value: 'solid'
  }, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Dashed', 'wc-booster'),
    value: 'dashed'
  }, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Double', 'wc-booster'),
    value: 'double'
  }, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Dotted', 'wc-booster'),
    value: 'dotted'
  }],
  ...rest
});
const RadiusControl = ({
  label,
  ...rest
}) => (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.RangeControl, {
  label: label ? label : (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Icon Radius', 'wc-booster'),
  allowReset: true,
  min: 0,
  max: 50,
  ...rest
});
const SwitchControl = params => (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.ToggleControl, {
  ...params
});
const ExcerptLengthControl = ({
  label,
  ...rest
}) => (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.RangeControl, {
  label: label ? label : (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Excerpt Length', 'wc-booster'),
  allowReset: true,
  min: 1,
  max: 60,
  initialPosition: 20,
  ...rest
});
const PanelColor = ({
  children,
  ...rest
}) => (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.PanelColorSettings, {
  title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Color', 'wc-booster'),
  initialOpen: false,
  colors: _constants__WEBPACK_IMPORTED_MODULE_4__.colors,
  ...rest
}, children);
const FixedBackgroundColor = ({
  label,
  ...rest
}) => (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(SwitchControl, {
  label: label ? label : (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Fixed Background', 'wc-booster'),
  ...rest
});

/***/ }),

/***/ "./src/custom-control/responsive-range-wrapper.js":
/*!********************************************************!*\
  !*** ./src/custom-control/responsive-range-wrapper.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_responsive_range_control__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/responsive-range-control */ "./src/components/responsive-range-control.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../constants */ "./src/constants.js");





const ResponsiveRangeWrapperControl = props => {
  const onChange = (name, data) => {
    props.onChange(data);
  };
  const reset = () => {
    const {
      onChange,
      defaultValue
    } = props;
    defaultValue && onChange(defaultValue);
  };
  const {
    value,
    defaultValue,
    step = "1",
    beforeIcon = "editor-textcolor"
  } = props;
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_responsive_range_control__WEBPACK_IMPORTED_MODULE_3__["default"], {
    name: "fontSize",
    step: step,
    responsiveViews: _constants__WEBPACK_IMPORTED_MODULE_4__.defaultResponsiveViews,
    value: value,
    onChange: onChange,
    label: props.label,
    beforeIcon: beforeIcon
  }), defaultValue && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: `${_constants__WEBPACK_IMPORTED_MODULE_4__.prefix}-btn-reset-wrapper`
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Button, {
    onClick: reset,
    className: `is-button is-default is-small`
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Reset", "wc-booster"))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ResponsiveRangeWrapperControl);

/***/ }),

/***/ "./src/custom-control/video-control.js":
/*!*********************************************!*\
  !*** ./src/custom-control/video-control.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../helpers */ "./src/helpers/index.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../constants */ "./src/constants.js");





const VideoControl = props => {
  const getValue = () => {
    const {
      value
    } = props;
    if ((0,_helpers__WEBPACK_IMPORTED_MODULE_3__.isUndefined)(value)) {
      return {
        url: undefined
      };
    }
    return value;
  };
  const onRender = ({
    open
  }) => {
    const onRemove = e => {
      e.preventDefault();
      props.onSelect(undefined);
    };
    const {
      url
    } = getValue();
    return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: `${_constants__WEBPACK_IMPORTED_MODULE_4__.prefix}-image-uploader`
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: `${_constants__WEBPACK_IMPORTED_MODULE_4__.prefix}-image-uploader-wrapper`
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: `${_constants__WEBPACK_IMPORTED_MODULE_4__.prefix}-button-wrapper`
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("button", {
      onClick: open,
      className: `${_constants__WEBPACK_IMPORTED_MODULE_4__.prefix}-image-uploader-trigger video`
    }), url && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("button", {
      className: `${_constants__WEBPACK_IMPORTED_MODULE_4__.prefix}-image-uploader-delete`,
      isDestructive: true,
      onClick: onRemove
    }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Delete Video", "wc-booster")))));
  };
  const onSelect = (v, type) => {
    let d;
    const {
      url,
      height,
      width,
      subtype,
      mime,
      icon
    } = v;
    d = {
      id: v.id,
      alt: v.alt,
      url,
      height,
      width,
      subtype,
      mime,
      icon
    };
    props.onSelect(d);
  };
  const {
    value
  } = props;
  let selectedId = undefined;
  if (value) {
    selectedId = value.id;
  }
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.MediaUploadCheck, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.MediaUpload, {
    gallery: false,
    multiple: false,
    onSelect: v => {
      onSelect(v);
    },
    allowedTypes: ["video"],
    value: selectedId,
    render: onRender
  })));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (VideoControl);
(0,_helpers__WEBPACK_IMPORTED_MODULE_3__.globalize)("VideoControl", VideoControl);

/***/ }),

/***/ "./src/helpers/index.js":
/*!******************************!*\
  !*** ./src/helpers/index.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   addWrapperClass: () => (/* binding */ addWrapperClass),
/* harmony export */   capitalize: () => (/* binding */ capitalize),
/* harmony export */   classnames: () => (/* binding */ classnames),
/* harmony export */   downloadAsJsonFile: () => (/* binding */ downloadAsJsonFile),
/* harmony export */   exportToJsonFile: () => (/* binding */ exportToJsonFile),
/* harmony export */   findIndex: () => (/* binding */ findIndex),
/* harmony export */   getArray: () => (/* binding */ getArray),
/* harmony export */   getClass: () => (/* binding */ getClass),
/* harmony export */   getClassName: () => (/* binding */ getClassName),
/* harmony export */   getDefaultAttr: () => (/* binding */ getDefaultAttr),
/* harmony export */   getDimensionStyle: () => (/* binding */ getDimensionStyle),
/* harmony export */   getInnerBlocks: () => (/* binding */ getInnerBlocks),
/* harmony export */   getInnerBlocksCount: () => (/* binding */ getInnerBlocksCount),
/* harmony export */   getLocalImage: () => (/* binding */ getLocalImage),
/* harmony export */   getParentAttrs: () => (/* binding */ getParentAttrs),
/* harmony export */   getPayload: () => (/* binding */ getPayload),
/* harmony export */   getPreviewDevice: () => (/* binding */ getPreviewDevice),
/* harmony export */   getQuickViewStyle: () => (/* binding */ getQuickViewStyle),
/* harmony export */   getResponsiveRangeVal: () => (/* binding */ getResponsiveRangeVal),
/* harmony export */   getShapeDivider: () => (/* binding */ getShapeDivider),
/* harmony export */   getTypoStyle: () => (/* binding */ getTypoStyle),
/* harmony export */   getwishListStyle: () => (/* binding */ getwishListStyle),
/* harmony export */   globalize: () => (/* binding */ globalize),
/* harmony export */   has: () => (/* binding */ has),
/* harmony export */   innerBlocksLimit: () => (/* binding */ innerBlocksLimit),
/* harmony export */   insertableBlocks: () => (/* binding */ insertableBlocks),
/* harmony export */   isCheckoutProductTemplate: () => (/* binding */ isCheckoutProductTemplate),
/* harmony export */   isPro: () => (/* binding */ isPro),
/* harmony export */   isSingleProductTemplate: () => (/* binding */ isSingleProductTemplate),
/* harmony export */   isSiteEditor: () => (/* binding */ isSiteEditor),
/* harmony export */   isUndefined: () => (/* binding */ isUndefined),
/* harmony export */   merge: () => (/* binding */ merge),
/* harmony export */   pickBy: () => (/* binding */ pickBy),
/* harmony export */   register: () => (/* binding */ register),
/* harmony export */   setColWidth: () => (/* binding */ setColWidth),
/* harmony export */   setInitialAttrs: () => (/* binding */ setInitialAttrs),
/* harmony export */   setPreviewDevice: () => (/* binding */ setPreviewDevice),
/* harmony export */   shouldShowAddButton: () => (/* binding */ shouldShowAddButton),
/* harmony export */   shouldShowUpgrader: () => (/* binding */ shouldShowUpgrader),
/* harmony export */   union: () => (/* binding */ union),
/* harmony export */   wordTrim: () => (/* binding */ wordTrim)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_hooks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/hooks */ "@wordpress/hooks");
/* harmony import */ var _wordpress_hooks__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_hooks__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../constants */ "./src/constants.js");
/* harmony import */ var lodash_has__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! lodash/has */ "./node_modules/lodash/has.js");
/* harmony import */ var lodash_has__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(lodash_has__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var lodash_isUndefined__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! lodash/isUndefined */ "./node_modules/lodash/isUndefined.js");
/* harmony import */ var lodash_isUndefined__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(lodash_isUndefined__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var lodash_pickBy__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! lodash/pickBy */ "./node_modules/lodash/pickBy.js");
/* harmony import */ var lodash_pickBy__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(lodash_pickBy__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var lodash_union__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! lodash/union */ "./node_modules/lodash/union.js");
/* harmony import */ var lodash_union__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(lodash_union__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var lodash_findIndex__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! lodash/findIndex */ "./node_modules/lodash/findIndex.js");
/* harmony import */ var lodash_findIndex__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(lodash_findIndex__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var lodash_merge__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! lodash/merge */ "./node_modules/lodash/merge.js");
/* harmony import */ var lodash_merge__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(lodash_merge__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_13__);







const {
  applyFilters
} = (0,_wordpress_hooks__WEBPACK_IMPORTED_MODULE_2__.createHooks)();







const isUndefined = (lodash_isUndefined__WEBPACK_IMPORTED_MODULE_8___default());
const pickBy = (lodash_pickBy__WEBPACK_IMPORTED_MODULE_9___default());
const has = (lodash_has__WEBPACK_IMPORTED_MODULE_7___default());
const union = (lodash_union__WEBPACK_IMPORTED_MODULE_10___default());
const findIndex = (lodash_findIndex__WEBPACK_IMPORTED_MODULE_11___default());
const merge = (lodash_merge__WEBPACK_IMPORTED_MODULE_12___default());

const classnames = (classnames__WEBPACK_IMPORTED_MODULE_13___default());
const insertableBlocks = [];
const register = (name, payload, prefix = "wc-booster") => {
  if (!payload.supports || payload.supports && payload.supports.inserter === true) {
    insertableBlocks.push(name);
  }
  (0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__.registerBlockType)(name, getPayload(payload));
};
const globalize = (name, component) => {
  if (isUndefined(wp.wcBooster)) {
    wp.wcBooster = {};
  }
  wp.wcBooster[name] = component;
};
const wordTrim = (sentence, amount, tail = "...") => {
  const words = isUndefined(sentence) ? "" : sentence.split(" ");
  if (amount >= words.length) {
    return sentence;
  }
  const truncated = words.slice(0, amount);
  return `${truncated.join(" ")}${tail}`;
};
const capitalize = s => {
  if (typeof s !== "string") return "";
  return s.charAt(0).toUpperCase() + s.slice(1);
};
const getPayload = ({
  icon,
  category,
  ...rest
}) => ({
  ...rest,
  icon: icon ? icon : "universal-access-alt",
  category: category ? category : "wc-booster"
});
const getArray = (count = 1, value = 0, isArray = false) => {
  if (isArray) {
    return value;
  } else {
    return new Array(parseInt(count > 0 ? count : 1)).fill(value);
  }
};
const getClass = cls => `${_constants__WEBPACK_IMPORTED_MODULE_6__.prefix}-${cls}`;
const isSiteEditor = () => {
  const urlParams = new URLSearchParams(window.location.search);
  const param = urlParams.get("postType");
  return param == "wp_template";
};
const getPreviewDevice = () => {
  if (wp.data.select("core/editor") && wp.data.select("core/editor").getDeviceType) {
    return wp.data.select("core/editor").getDeviceType().toLowerCase();
  }
  if (isSiteEditor()) {
    return wp.data.select("core/edit-site").__experimentalGetPreviewDeviceType().toLowerCase();
  }
  return wp.data.select("core/edit-post").__experimentalGetPreviewDeviceType().toLowerCase();
};
const setPreviewDevice = view => {
  if ((0,_wordpress_data__WEBPACK_IMPORTED_MODULE_3__.dispatch)("core/editor") && (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_3__.dispatch)("core/editor").setDeviceType) {
    (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_3__.dispatch)("core/editor").setDeviceType(capitalize(view));
    return;
  }
  if (isSiteEditor()) {
    (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_3__.dispatch)("core/edit-site")?.__experimentalSetPreviewDeviceType(capitalize(view));
  } else {
    (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_3__.dispatch)("core/edit-post")?.__experimentalSetPreviewDeviceType(capitalize(view));
  }
};
const getTypoStyle = typo => {
  if (!typo) return {};
  const {
    fontSize,
    fontFamily,
    fontWeight,
    lineHeight,
    textTransform
  } = typo;
  const device = getPreviewDevice();
  return {
    fontFamily,
    fontWeight,
    textTransform,
    lineHeight: lineHeight.values[device] + lineHeight.activeUnit,
    fontSize: fontSize.values[device] + fontSize.activeUnit
  };
};
const getDimensionStyle = (props, setting) => {
  const device = getPreviewDevice();
  if (props === "margin") {
    props = ["marginTop", "marginRight", "marginBottom", "marginLeft"];
  } else if (props === "padding") {
    props = ["paddingTop", "paddingRight", "paddingBottom", "paddingLeft"];
  } else if (props === "border-radius") {
    props = ["border-top-left-radius", "border-top-right-radius", "border-bottom-left-radius", "border-bottom-right-radius"];
  } else if (props === "position") {
    props = ["top", "right", "left", "bottom"];
  }
  if (!setting) return {};
  let style = {};
  const {
    values,
    activeUnit
  } = setting;
  props.map((v, k) => {
    style[v] = values[device][k] ? values[device][k] + activeUnit : values[device][k];
  });
  return style;
};
const getResponsiveRangeVal = data => {
  //backward coompatibility
  if (typeof data != 'object') {
    data = {
      "activeUnit": "",
      "values": {
        "desktop": data,
        "tablet": data,
        "mobile": data
      }
    };
  }
  const device = getPreviewDevice();
  const {
    activeUnit,
    values
  } = data;
  return values[device] + activeUnit;
};

/* For handle gutter of child blocks */
const getInnerBlocks = clientsId => (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_3__.select)("core/block-editor").getBlocks(clientsId);
const setColWidth = (id, itemsPerRow, gutter, type = "parent", initGap = 0) => {
  const width = `calc( ${100 / itemsPerRow}% - ${gutter * (itemsPerRow - 1) / itemsPerRow}px)`;
  const margin = `${gutter / 2 + initGap}px 0`;
  const styleEle = $ele => {
    $ele.style.width = width;
    $ele.style.margin = margin;
  };
  if (type === "child") {
    const $ele = document.getElementById(`block-${id}`);
    $ele && styleEle($ele);
    return;
  }
  const innerBlocksId = getInnerBlocks(id).map(innerBlock => innerBlock.clientId);
  innerBlocksId.forEach(id => {
    const $ele = document.getElementById(`block-${id}`);
    $ele && styleEle($ele);
  });
};
const addWrapperClass = (clientId, className = "icon-blocks-wrapper") => {
  /* Add custom class into subblocks parent div for flex layout */
  const $ele = document.getElementById(`block-${clientId}`);
  const prefixClassName = `${_constants__WEBPACK_IMPORTED_MODULE_6__.prefix}-${className}`;
  if (!$ele) return;
  if (!$ele.parentElement.classList.contains(prefixClassName)) {
    $ele.parentElement.classList.add(prefixClassName);
  }
};
const getQuickViewStyle = attributes => {
  const style = {
    position: attributes.iconPosition,
    zIndex: 9999999999999,
    top: getResponsiveRangeVal(attributes.top),
    right: getResponsiveRangeVal(attributes.right)
  };
  return style;
};
const getwishListStyle = attributes => {
  const style = {
    position: attributes.iconPosition,
    zIndex: 9999999999999,
    ...getDimensionStyle(["top", "left"], attributes.position)
  };
  const iconStyle = {
    fontSize: getResponsiveRangeVal(attributes.iconSize),
    color: attributes.iconColor,
    backgroundColor: attributes.bgColor,
    ...getDimensionStyle("padding", attributes.padding),
    borderRadius: attributes.borderRadius + "%",
    fontWeight: 900
  };
  return {
    style,
    iconStyle
  };
};
const getParentAttrs = props => {
  const {
    clientId
  } = props;
  const parentId = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_3__.select)("core/block-editor").getBlockRootClientId(clientId);
  if (parentId) {
    const parentBlockDetail = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_3__.select)("core/block-editor").getBlock(parentId);
    const {
      attributes
    } = parentBlockDetail;
    return attributes;
  }
  return false;
};
const setInitialAttrs = (props, editorNSaveAttrs) => {
  const {
    setAttributes
  } = props;
  const defaultAttr = {
    ...editorNSaveAttrs,
    isInit: true
  };
  setAttributes(defaultAttr);
};
const getInnerBlocksCount = clientId => {
  const blocks = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_3__.select)("core/block-editor").getBlocksByClientId(clientId)[0];
  return blocks ? blocks.innerBlocks.length : 0;
};
const innerBlocksLimit = applyFilters("wcBoosterInnerBlockLimit", 4);
const shouldShowAddButton = clientId => clientId && getInnerBlocksCount(clientId) < innerBlocksLimit;
const shouldShowUpgrader = clientId => {
  const parentId = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_3__.select)("core/block-editor").getBlockRootClientId(clientId);
  if (!parentId) {
    return false;
  }
  const blocks = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_3__.select)("core/block-editor").getBlocksByClientId(parentId)[0].innerBlocks;
  const i = findIndex(blocks, {
    clientId
  });
  return i >= innerBlocksLimit;
};
const downloadAsJsonFile = (fileName, data) => {
  const json = JSON.stringify(data);
  const blob = new Blob([json], {
    type: "application/json"
  });
  const href = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = href;
  link.download = fileName + ".json";
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};
const getLocalImage = name => {
  return WC_Booster_VAR.plugin_path + "img/" + name;
};
const isPro = () => WC_Booster_VAR.is_pro == "1";
const exportToJsonFile = clientId => {
  const iterator = ({
    name,
    attributes,
    innerBlocks
  }) => {
    if (innerBlocks.length > 0) {
      return {
        name,
        attributes,
        inner: innerBlocks.map(child => iterator(child))
      };
    }
    return {
      name,
      attributes
    };
  };
  const blocks = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_3__.select)("core/block-editor").getBlocksByClientId(clientId);
  const data = blocks.map(a => iterator(a));
  downloadAsJsonFile(blocks[0].name.replace("/", "-") + "-" + clientId, data);
};
const getShapeDivider = (shape, styles) => {
  let s = {
    width: "100%",
    ...styles
  };
  const shapes = {
    hills: (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.SVG, {
      style: s,
      className: "divider--hills",
      viewBox: "0 0 1920 105",
      xmlns: "http://www.w3.org/2000/svg",
      preserveAspectRatio: "none"
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.G, {
      fillRule: "evenodd",
      transform: "matrix(1 0 0 -1 0 105)"
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.Path, {
      d: "m1920 14.8827052c-116.23325 0-224.05162 88.3906828-395.09265 88.3906828-160.92196 0-254.53172-83.4344997-444.90735-83.4344997-154.297581 0-240.095847 39.6344097-367.66819 39.6344097-154.121863 0-198.902329-36.1223133-349.458242-36.1223133-144.878137 0-241.175717 80.8685493-362.873568 80.8685493 0-34.0793243 0-68.1494291 0-102.219534h1920z"
    }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.Path, {
      d: "m1920 14.6612844c-116.11434 0-223.9659 88.8291396-395.06196 88.8291396-160.92415 0-254.54487-83.7874573-444.93804-83.7874573-154.317311 0-240.088941 39.8974838-367.565152 39.8974838-154.034172 0-198.792715-36.4840402-349.164477-36.4840402-144.965828 0-241.283139 81.1250467-363.270371 81.1250467 0-34.7474052 0-69.4948104 0-104.241457h1920z"
    }))),
    triangle: (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.SVG, {
      style: s,
      className: "divider--triangle",
      viewBox: "0 0 100 100",
      xmlns: "http://www.w3.org/2000/svg",
      preserveAspectRatio: "none"
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.Path, {
      d: "m0 0 50 100 50-100z",
      fillRule: "evenodd",
      transform: "matrix(1 0 0 -1 0 100)"
    })),
    sloped: (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.SVG, {
      style: s,
      className: "divider--sloped",
      "aria-hidden": true,
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 100 100",
      preserveAspectRatio: "none"
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.Path, {
      d: "M0 100 C 20 0 50 0 100 100 Z"
    })),
    waves: (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.SVG, {
      style: s,
      className: "divider--waves",
      fill: "",
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1000 300",
      preserveAspectRatio: "none"
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.Path, {
      d: "M 1000 299 l 2 -279 c -155 -36 -310 135 -415 164 c -102.64 28.35 -149 -32 -232 -31 c -80 1 -142 53 -229 80 c -65.54 20.34 -101 15 -126 11.61 v 54.39 z"
    }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.Path, {
      d: "M 1000 286 l 2 -252 c -157 -43 -302 144 -405 178 c -101.11 33.38 -159 -47 -242 -46 c -80 1 -145.09 54.07 -229 87 c -65.21 25.59 -104.07 16.72 -126 10.61 v 22.39 z"
    }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.Path, {
      d: "M 1000 300 l 1 -230.29 c -217 -12.71 -300.47 129.15 -404 156.29 c -103 27 -174 -30 -257 -29 c -80 1 -130.09 37.07 -214 70 c -61.23 24 -108 15.61 -126 10.61 v 22.39 z"
    })),
    angled: (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.SVG, {
      style: s,
      className: "divider--angled",
      "aria-hidden": true,
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 100 100",
      preserveAspectRatio: "none"
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("polygon", {
      points: "0,100 100,0 100,100"
    })),
    wavy: (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.SVG, {
      style: s,
      className: "divider--wavy",
      viewBox: "0 0 100 10",
      xmlns: "http://www.w3.org/2000/svg",
      preserveAspectRatio: "none"
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.Path, {
      d: "m42.19.65c2.26-.25 5.15.04 7.55.53 2.36.49 7.09 2.35 10.05 3.57 7.58 3.22 13.37 4.45 19.26 4.97 2.36.21 4.87.35 10.34-.25s10.62-2.56 10.62-2.56v-6.91h-100.01v3.03s7.2 3.26 15.84 3.05c3.92-.07 9.28-.67 13.4-2.24 2.12-.81 5.22-1.82 7.97-2.42 2.72-.63 3.95-.67 4.98-.77z",
      fillRule: "evenodd",
      transform: "matrix(1 0 0 -1 0 10)"
    })),
    rounded: (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.SVG, {
      style: s,
      className: "divider--rounded",
      xmlns: "http://www.w3.org/2000/svg",
      x: "0px",
      y: "0px",
      viewBox: "0 0 240 24",
      enableBackground: "new 0 0 240 24",
      preserveAspectRatio: "none"
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.Path, {
      d: "M119.849,0C47.861,0,0,24,0,24h240C240,24,191.855,0.021,119.849,0z"
    })),
    pointed: (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.SVG, {
      style: s,
      className: "divider--pointed",
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1000 100",
      preserveAspectRatio: "none"
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.Path, {
      d: "M737.9,94.7L0,0v100h1000V0L737.9,94.7z"
    }))
  };
  return shapes[shape];
};
const isSingleProductTemplate = () => {
  const currentUser = wp.data.select('core').getCurrentUser();
  const urlParams = new URLSearchParams(window.location.search);
  const param = urlParams.get("postType");
  return currentUser && param == 'wp_template' && window.location.href.includes('single-product');
};
const isCheckoutProductTemplate = () => {
  const currentUser = wp.data.select('core').getCurrentUser();
  const urlParams = new URLSearchParams(window.location.search);
  const param = urlParams.get("postType");
  return currentUser && param == 'wp_template' && window.location.href.includes('checkout');
};
const getClassName = name => name.split(" ")[0];
const getDefaultAttr = metadata => attr => metadata.attributes[attr].default;

/***/ }),

/***/ "./src/helpers/svg.js":
/*!****************************!*\
  !*** ./src/helpers/svg.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../constants */ "./src/constants.js");


const svg = {
  slider: (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
    width: "21",
    height: "21",
    role: "img",
    "aria-hidden": "true",
    focusable: "false"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    fill: "#32373c",
    d: "M7.554 12.936h4.893v-5.871h-4.893v5.871zM8.888 8.399h2.224v3.202h-2.224v-3.202z"
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    fill: "#32373c",
    d: "M13.913 8.868l1.132 1.132-1.132 1.132 0.944 0.944 2.076-2.076-2.076-2.076-0.943 0.943z"
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    fill: "#32373c",
    d: "M5.144 7.924l-2.076 2.076 2.076 2.076 0.943-0.944-1.132-1.132 1.132-1.132-0.944-0.943z"
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    fill: "#32373c",
    d: "M19.31 0h-18.619c-0.381 0-0.691 0.309-0.691 0.691v18.619c0 0.382 0.309 0.691 0.691 0.691h18.619c0.382 0 0.691-0.309 0.691-0.691v-18.619c0-0.381-0.309-0.691-0.69-0.691v0zM1.32 18.62v-17.301h17.3v17.3h-17.3z"
  })),
  callToAction: (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
    width: "24",
    height: "24",
    role: "img",
    "aria-hidden": "true",
    focusable: "false"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    fill: "#32373c",
    d: "M19.304 16.848l-2.352-2.352 1.192-1.192c0.154-0.154 0.224-0.373 0.187-0.588s-0.177-0.398-0.374-0.491l-9.486-4.494c-0.256-0.122-0.561-0.068-0.761 0.132s-0.253 0.505-0.132 0.761l4.494 9.485c0.093 0.197 0.277 0.336 0.492 0.373s0.434-0.033 0.588-0.187l1.192-1.192 2.353 2.352c0.131 0.131 0.303 0.196 0.474 0.196s0.343-0.065 0.474-0.196l1.659-1.659c0.262-0.262 0.262-0.686 0-0.948v0zM17.17 18.033l-2.353-2.352c-0.131-0.131-0.303-0.196-0.474-0.196s-0.343 0.065-0.474 0.196l-0.993 0.993-3.283-6.929 6.929 3.282-0.993 0.994c-0.262 0.262-0.262 0.686 0 0.948l2.352 2.352-0.711 0.711z"
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    fill: "#32373c",
    d: "M7.645 10.992h-5.804v-9.303h9.303v6.647c0 0.37 0.3 0.671 0.671 0.671s0.671-0.3 0.671-0.671v-7.317c0-0.37-0.3-0.671-0.671-0.671h-10.644c-0.37 0-0.671 0.3-0.671 0.671v10.644c0 0.371 0.3 0.671 0.671 0.671h6.474c0.37 0 0.671-0.3 0.671-0.671s-0.3-0.671-0.671-0.671v0z"
  })),
  section: (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
    width: "24",
    height: "24",
    role: "img",
    "aria-hidden": "true",
    focusable: "false"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    fill: "#ffffff",
    d: "M20 18.008h-20v-16.016h20v16.016zM1.172 16.836h17.656v-13.672h-17.656v13.672z"
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    fill: "#ffffff",
    d: "M7.617 4.604h4.766v1.172h-4.766v-1.172z"
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    fill: "#ffffff",
    d: "M8.998 14.385h-6.237v-6.238h6.238v6.238zM3.932 13.213h3.894v-3.894h-3.894v3.894z"
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    fill: "#ffffff",
    d: "M17.24 11.852h-6.237v-3.705h6.238v3.705zM12.174 10.68h3.894v-1.361h-3.894v1.361z"
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    fill: "#ffffff",
    d: "M11.588 13.024h5.066v1.172h-5.066v-1.172z"
  })),
  iconBox: (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
    width: "24",
    height: "24",
    role: "img",
    "aria-hidden": "true",
    focusable: "false"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "m19.3 0h-18.6c-0.4 0-0.7 0.3-0.7 0.7v18.6c0 0.4 0.3 0.7 0.7 0.7h18.6c0.4 0 0.7-0.3 0.7-0.7v-18.6c0-0.4-0.3-0.7-0.7-0.7zm-18 18.6v-17.3h17.3v17.3h-17.3z",
    fill: "#32373C"
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "m9.1 14.8h2.9v-1.3h-4v1.3h1.1z",
    fill: "#32373C"
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("circle", {
    cx: "10",
    cy: "8.3",
    r: "3.1",
    fill: "none",
    stroke: "#32373C"
  })),
  iconPicker: (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    height: "24",
    width: "24",
    "aria-hidden": "true",
    focusable: "false",
    viewBox: "0 0 576 512"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M287.9 0c9.2 0 17.6 5.2 21.6 13.5l68.6 141.3 153.2 22.6c9 1.3 16.5 7.6 19.3 16.3s.5 18.1-5.9 24.5L433.6 328.4l26.2 155.6c1.5 9-2.2 18.1-9.7 23.5s-17.3 6-25.3 1.7l-137-73.2L151 509.1c-8.1 4.3-17.9 3.7-25.3-1.7s-11.2-14.5-9.7-23.5l26.2-155.6L31.1 218.2c-6.5-6.4-8.7-15.9-5.9-24.5s10.3-14.9 19.3-16.3l153.2-22.6L266.3 13.5C270.4 5.2 278.7 0 287.9 0zm0 79L235.4 187.2c-3.5 7.1-10.2 12.1-18.1 13.3L99 217.9 184.9 303c5.5 5.5 8.1 13.3 6.8 21L171.4 443.7l105.2-56.2c7.1-3.8 15.6-3.8 22.6 0l105.2 56.2L384.2 324.1c-1.3-7.7 1.2-15.5 6.8-21l85.9-85.1L358.6 200.5c-7.8-1.2-14.6-6.1-18.1-13.3L287.9 79z"
  })),
  miniCart: (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    height: "24",
    width: "24",
    "aria-hidden": "true",
    focusable: "false",
    viewBox: "0 0 576 512"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M0 24C0 10.7 10.7 0 24 0H69.5c22 0 41.5 12.8 50.6 32h411c26.3 0 45.5 25 38.6 50.4l-41 152.3c-8.5 31.4-37 53.3-69.5 53.3H170.7l5.4 28.5c2.2 11.3 12.1 19.5 23.6 19.5H488c13.3 0 24 10.7 24 24s-10.7 24-24 24H199.7c-34.6 0-64.3-24.6-70.7-58.5L77.4 54.5c-.7-3.8-4-6.5-7.9-6.5H24C10.7 48 0 37.3 0 24zM128 464a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm336-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96z"
  })),
  heading: (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
    width: "24",
    height: "24",
    role: "img",
    "aria-hidden": "true",
    focusable: "false"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    fill: "#32373c",
    d: "M0 18h20v2h-20v-2z"
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    fill: "#32373c",
    d: "M11 0h-2l-7.25 16h2.25l2.21-5h7.59l2.2 5h2.25l-7.25-16zM7.090 9l2.91-6.59 2.91 6.59h-5.82z"
  })),
  profileCard: (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
    width: "24",
    height: "24",
    role: "img",
    "aria-hidden": "true",
    focusable: "false"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    fill: "none",
    stroke: "#32373C",
    strokeWidth: "1.34",
    strokeMiterlimit: "10",
    d: "M19 17.9H1c-0.2 0-0.3-0.1-0.3-0.3V6.1C0.7 6 0.8 5.8 1 5.8H19c0.2 0 0.3 0.1 0.3 0.3v11.5C19.3 17.8 19.2 17.9 19 17.9z"
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("circle", {
    fill: "#FFFFFF",
    stroke: "#32373C",
    strokeWidth: "1.34",
    strokeMiterlimit: "10",
    cx: "6.6",
    cy: "5.6",
    r: "3.6"
  })),
  blog: (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
    width: "24",
    height: "24",
    role: "img",
    "aria-hidden": "true",
    focusable: "false"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M0,0h24v24H0V0z",
    fill: "none"
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("rect", {
    x: "11",
    y: "7",
    width: "6",
    height: "2"
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("rect", {
    x: "11",
    y: "11",
    width: "6",
    height: "2"
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("rect", {
    x: "11",
    y: "15",
    width: "6",
    height: "2"
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("rect", {
    x: "7",
    y: "7",
    width: "2",
    height: "2"
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("rect", {
    x: "7",
    y: "11",
    width: "2",
    height: "2"
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("rect", {
    x: "7",
    y: "15",
    width: "2",
    height: "2"
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M20.1,3H3.9C3.4,3,3,3.4,3,3.9v16.2C3,20.5,3.4,21,3.9,21h16.2c0.4,0,0.9-0.5,0.9-0.9V3.9C21,3.4,20.5,3,20.1,3z M19,19H5V5h14V19z"
  })),
  iconlist: (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    height: "24",
    width: "24",
    viewBox: "0 0 512 512"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M40 48C26.7 48 16 58.7 16 72v48c0 13.3 10.7 24 24 24H88c13.3 0 24-10.7 24-24V72c0-13.3-10.7-24-24-24H40zM192 64c-17.7 0-32 14.3-32 32s14.3 32 32 32H480c17.7 0 32-14.3 32-32s-14.3-32-32-32H192zm0 160c-17.7 0-32 14.3-32 32s14.3 32 32 32H480c17.7 0 32-14.3 32-32s-14.3-32-32-32H192zm0 160c-17.7 0-32 14.3-32 32s14.3 32 32 32H480c17.7 0 32-14.3 32-32s-14.3-32-32-32H192zM16 232v48c0 13.3 10.7 24 24 24H88c13.3 0 24-10.7 24-24V232c0-13.3-10.7-24-24-24H40c-13.3 0-24 10.7-24 24zM40 368c-13.3 0-24 10.7-24 24v48c0 13.3 10.7 24 24 24H88c13.3 0 24-10.7 24-24V392c0-13.3-10.7-24-24-24H40z"
  })),
  counter: (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
    width: "24",
    height: "24",
    role: "img",
    "aria-hidden": "true",
    focusable: "false"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("rect", {
    x: "3.6",
    y: "17.3",
    fill: "#32373C",
    width: "13.2",
    height: "2.7"
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    fill: "#32373C",
    d: "M6.9 3.6v6c0 2-0.7 3.6-3.3 3.6 -2.5 0-3.1-1.7-3.1-3.6V3.7c0-2.3 1.1-3.6 3.2-3.6C5.8 0.2 6.9 1.5 6.9 3.6zM2.9 3.4V10c0 0.7 0.2 1.2 0.8 1.2 0.6 0 0.7-0.5 0.7-1.2V3.4c0-0.6-0.2-1.1-0.7-1.1C3.1 2.3 2.9 2.7 2.9 3.4z"
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    fill: "#32373C",
    d: "M14.8 3.6v6c0 2-0.7 3.6-3.3 3.6 -2.5 0-3.1-1.7-3.1-3.6V3.7c0-2.3 1.1-3.6 3.2-3.6C13.7 0.2 14.8 1.5 14.8 3.6zM10.9 3.4V10c0 0.7 0.2 1.2 0.8 1.2 0.6 0 0.7-0.5 0.7-1.2V3.4c0-0.6-0.2-1.1-0.7-1.1C11.1 2.3 10.9 2.7 10.9 3.4z"
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    fill: "#32373C",
    d: "M17 13.1V3C16.7 3 16.2 3 16 3V1.2c0.8-0.1 1.4-0.4 1.7-0.9h1.9v12.8H17z"
  })),
  button: (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 50 50",
    width: "50",
    height: "50"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M 4 12 C 1.800781 12 0 13.800781 0 16 L 0 34 C 0 36.199219 1.800781 38 4 38 L 46 38 C 48.199219 38 50 36.199219 50 34 L 50 16 C 50 13.800781 48.199219 12 46 12 Z M 4 14 L 46 14 C 47.117188 14 48 14.882813 48 16 L 48 34 C 48 35.117188 47.117188 36 46 36 L 4 36 C 2.882813 36 2 35.117188 2 34 L 2 16 C 2 14.882813 2.882813 14 4 14 Z M 33.527344 22.308594 C 31.835938 22.308594 30.746094 23.445313 30.746094 25.277344 C 30.746094 27.113281 31.824219 28.25 33.527344 28.25 C 35.21875 28.25 36.296875 27.113281 36.296875 25.277344 C 36.296875 23.445313 35.21875 22.308594 33.527344 22.308594 Z M 6.914063 22.464844 L 6.914063 28.097656 L 9.617188 28.097656 C 10.824219 28.097656 11.589844 27.460938 11.589844 26.472656 C 11.589844 25.753906 11.015625 25.179688 10.28125 25.140625 L 10.28125 25.066406 C 10.878906 24.984375 11.328125 24.472656 11.328125 23.867188 C 11.328125 22.992188 10.667969 22.464844 9.542969 22.464844 Z M 13.015625 22.464844 L 13.015625 26.152344 C 13.015625 27.417969 13.980469 28.25 15.445313 28.25 C 16.910156 28.25 17.871094 27.417969 17.871094 26.152344 L 17.871094 22.464844 L 16.4375 22.464844 L 16.4375 26 C 16.4375 26.65625 16.082031 27.046875 15.445313 27.046875 C 14.808594 27.046875 14.449219 26.65625 14.449219 26 L 14.449219 22.464844 Z M 19.296875 22.464844 L 19.296875 23.613281 L 20.921875 23.613281 L 20.921875 28.097656 L 22.347656 28.097656 L 22.347656 23.613281 L 23.980469 23.613281 L 23.980469 22.464844 Z M 25.089844 22.464844 L 25.089844 23.613281 L 26.714844 23.613281 L 26.714844 28.097656 L 28.144531 28.097656 L 28.144531 23.613281 L 29.773438 23.613281 L 29.773438 22.464844 Z M 37.761719 22.464844 L 37.761719 28.097656 L 39.121094 28.097656 L 39.121094 24.894531 L 39.195313 24.894531 L 41.550781 28.097656 L 42.6875 28.097656 L 42.6875 22.464844 L 41.328125 22.464844 L 41.328125 25.636719 L 41.253906 25.636719 L 38.90625 22.464844 Z M 8.347656 23.472656 L 9.160156 23.472656 C 9.648438 23.472656 9.933594 23.714844 9.933594 24.117188 C 9.933594 24.515625 9.628906 24.761719 9.105469 24.761719 L 8.347656 24.761719 Z M 33.523438 23.496094 C 34.3125 23.496094 34.839844 24.191406 34.839844 25.277344 C 34.839844 26.367188 34.316406 27.0625 33.523438 27.0625 C 32.722656 27.0625 32.203125 26.367188 32.203125 25.277344 C 32.203125 24.191406 32.730469 23.496094 33.523438 23.496094 Z M 8.347656 25.628906 L 9.203125 25.628906 C 9.800781 25.628906 10.132813 25.886719 10.132813 26.347656 C 10.132813 26.824219 9.808594 27.089844 9.214844 27.089844 L 8.347656 27.089844 Z"
  })),
  iconBoxPro: {
    aligns: {
      left: `<svg width="100%" height="100%" viewBox="0 0 300 300" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g clip-path="url(#clip0_22_54)">
      <path d="M284.2 0H15.8C7.0739 0 0 7.0739 0 15.8V284.2C0 292.926 7.0739 300 15.8 300H284.2C292.926 300 300 292.926 300 284.2V15.8C300 7.0739 292.926 0 284.2 0Z" fill="#F3F3F3"/>
      <path d="M215.16 107.9H153.16V124.9H215.16V107.9Z" fill="#DDDDDD"/>
      <path d="M260.16 150.17H153.16V162.17H260.16V150.17Z" fill="#DDDDDD"/>
      <path d="M260.16 174.82H153.16V186.82H260.16V174.82Z" fill="#DDDDDD"/>
      <path d="M86.4998 196.66C112.269 196.66 133.16 175.769 133.16 150C133.16 124.23 112.269 103.34 86.4998 103.34C60.7302 103.34 39.8398 124.23 39.8398 150C39.8398 175.769 60.7302 196.66 86.4998 196.66Z" fill="#DDDDDD"/>
      </g>
      <defs>
      <clipPath id="clip0_22_54">
      <rect width="300" height="300" fill="white"/>
      </clipPath>
      </defs>
      </svg>
      `,
      center: `
      <svg width="100%" height="100%" viewBox="0 0 300 300" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g clip-path="url(#clip0_22_68)">
        <path d="M284.2 0H15.8C7.0739 0 0 7.0739 0 15.8V284.2C0 292.926 7.0739 300 15.8 300H284.2C292.926 300 300 292.926 300 284.2V15.8C300 7.0739 292.926 0 284.2 0Z" fill="#F3F3F3"/>
        <path d="M181.09 171.83H119.09V188.83H181.09V171.83Z" fill="#DDDDDD"/>
        <path d="M215 208.09H85.1602V220.09H215V208.09Z" fill="#DDDDDD"/>
        <path d="M215 230.74H85.1602V242.74H215V230.74Z" fill="#DDDDDD"/>
        <path d="M150.09 150.58C175.859 150.58 196.75 129.689 196.75 103.92C196.75 78.1502 175.859 57.2598 150.09 57.2598C124.32 57.2598 103.43 78.1502 103.43 103.92C103.43 129.689 124.32 150.58 150.09 150.58Z" fill="#DDDDDD"/>
        </g>
        <defs>
        <clipPath id="clip0_22_68">
        <rect width="300" height="300" fill="white"/>
        </clipPath>
        </defs>
        </svg>
        `,
      right: `
      <svg width="100%" height="100%" viewBox="0 0 300 300" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g clip-path="url(#clip0_23_74)">
      <path d="M284.2 0H15.8C7.0739 0 0 7.0739 0 15.8V284.2C0 292.926 7.0739 300 15.8 300H284.2C292.926 300 300 292.926 300 284.2V15.8C300 7.0739 292.926 0 284.2 0Z" fill="#F3F3F3"/>
      <path d="M146.84 114.39H84.8398V131.39H146.84V114.39Z" fill="#DDDDDD"/>
      <path d="M146.84 156.65H39.8398V168.65H146.84V156.65Z" fill="#DDDDDD"/>
      <path d="M146.84 181.31H39.8398V193.31H146.84V181.31Z" fill="#DDDDDD"/>
      <path d="M213.5 196.66C239.269 196.66 260.16 175.769 260.16 150C260.16 124.23 239.269 103.34 213.5 103.34C187.73 103.34 166.84 124.23 166.84 150C166.84 175.769 187.73 196.66 213.5 196.66Z" fill="#DDDDDD"/>
      </g>
      <defs>
      <clipPath id="clip0_23_74">
      <rect width="300" height="300" fill="white"/>
      </clipPath>
      </defs>
      </svg>
      `
    },
    iconTypes: {
      initial: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 300"> <defs> <style>.${_constants__WEBPACK_IMPORTED_MODULE_1__.prefix}-icon-layout-initial-bg-color{fill: #fff;}.${_constants__WEBPACK_IMPORTED_MODULE_1__.prefix}-icon-layout-initial-fill-color{fill: #3761CF;}</style> </defs> <rect class="${_constants__WEBPACK_IMPORTED_MODULE_1__.prefix}-icon-layout-initial-bg-color" width="300" height="300" rx="15.8"/> <path class="${_constants__WEBPACK_IMPORTED_MODULE_1__.prefix}-icon-layout-initial-fill-color" d="M129.1,174.41a1.19,1.19,0,0,0,1.2,1.28h14.52l0-11.9a1.69,1.69,0,0,1,1.7-2h6a1.87,1.87,0,0,1,2.11,2l0,11.86h14.21a1.49,1.49,0,0,0,1.52-1.6V152.11l-20-17.81L129.1,152.11Z"/> <path class="${_constants__WEBPACK_IMPORTED_MODULE_1__.prefix}-icon-layout-initial-fill-color" d="M121.27,150.45s1.8,3.33,5.74,0l23.52-19.9,22.06,19.78c4.55,3.28,6.26,0,6.26,0l-28.32-25.66Z"/> <polygon class="${_constants__WEBPACK_IMPORTED_MODULE_1__.prefix}-icon-layout-initial-fill-color" points="172.05 130.5 166.38 130.5 166.4 137.38 172.05 142.17 172.05 130.5"/></svg>`,
      stack: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 300"> <defs> <style>.${_constants__WEBPACK_IMPORTED_MODULE_1__.prefix}-icon-layout-stack-bg-color{fill: #fff;}.${_constants__WEBPACK_IMPORTED_MODULE_1__.prefix}-icon-layout-stack-icon-color{fill: #3761CF;}</style> </defs> <g id="Layer_2" data-name="Layer 2"> <g id="Layer_1-2" data-name="Layer 1"> <rect class="${_constants__WEBPACK_IMPORTED_MODULE_1__.prefix}-icon-layout-stack-bg-color" width="300" height="300" rx="15.8"/> <circle class="${_constants__WEBPACK_IMPORTED_MODULE_1__.prefix}-icon-layout-stack-icon-color" cx="150" cy="150" r="66.78"/> <path class="${_constants__WEBPACK_IMPORTED_MODULE_1__.prefix}-icon-layout-stack-bg-color" d="M129,174.22a1.2,1.2,0,0,0,1.2,1.29l14.52,0,0-11.89s-.2-2,1.7-2h6a1.87,1.87,0,0,1,2.11,2l0,11.85H168.8a1.49,1.49,0,0,0,1.52-1.6V151.92l-20-17.81L129,151.92Z"/> <path class="${_constants__WEBPACK_IMPORTED_MODULE_1__.prefix}-icon-layout-stack-bg-color" d="M121.21,150.27s1.8,3.32,5.74,0l23.52-19.9,22.06,19.77c4.55,3.29,6.26,0,6.26,0l-28.32-25.65Z"/> <polygon class="${_constants__WEBPACK_IMPORTED_MODULE_1__.prefix}-icon-layout-stack-bg-color" points="171.99 130.32 166.32 130.32 166.34 137.2 171.99 141.99 171.99 130.32"/> </g> </g></svg>`,
      frame: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 300"> <defs> <style>.${_constants__WEBPACK_IMPORTED_MODULE_1__.prefix}-icon-layout-frame-bg-color{fill: #fff;}.${_constants__WEBPACK_IMPORTED_MODULE_1__.prefix}-icon-layout-stroke-color{fill: none; stroke: #3761CF; stroke-miterlimit: 10; stroke-width: 5px;}.${_constants__WEBPACK_IMPORTED_MODULE_1__.prefix}-icon-layout-icon-color{fill: #3761CF;}</style> </defs> <rect class="${_constants__WEBPACK_IMPORTED_MODULE_1__.prefix}-icon-layout-frame-bg-color" width="300" height="300" rx="15.8"/> <circle class="${_constants__WEBPACK_IMPORTED_MODULE_1__.prefix}-icon-layout-stroke-color" cx="150.06" cy="150.18" r="61.27"/> <path class="${_constants__WEBPACK_IMPORTED_MODULE_1__.prefix}-icon-layout-icon-color" d="M129.1,174.41a1.19,1.19,0,0,0,1.2,1.28h14.52l0-11.9a1.69,1.69,0,0,1,1.7-2h6a1.87,1.87,0,0,1,2.11,2l0,11.86h14.21a1.49,1.49,0,0,0,1.52-1.6V152.11l-20-17.81L129.1,152.11Z"/> <path class="${_constants__WEBPACK_IMPORTED_MODULE_1__.prefix}-icon-layout-icon-color" d="M121.27,150.45s1.8,3.33,5.74,0l23.52-19.9,22.06,19.78c4.55,3.28,6.26,0,6.26,0l-28.32-25.66Z"/> <polygon class="${_constants__WEBPACK_IMPORTED_MODULE_1__.prefix}-icon-layout-icon-color" points="172.05 130.5 166.38 130.5 166.4 137.38 172.05 142.17 172.05 130.5"/></svg>`
    }
  },
  profileCardPro: {
    circle: `<svg width="100%" height="100%" viewBox="0 0 300 300" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g clip-path="url(#clip0_16_2)">
              <path d="M284.2 0H15.8C7.0739 0 0 7.0739 0 15.8V284.2C0 292.926 7.0739 300 15.8 300H284.2C292.926 300 300 292.926 300 284.2V15.8C300 7.0739 292.926 0 284.2 0Z" fill="#F3F3F3"/>
              <path d="M246.051 99.9502H53.8709C48.3978 99.9502 43.9609 104.387 43.9609 109.86V245.04C43.9609 250.513 48.3978 254.95 53.8709 254.95H246.051C251.524 254.95 255.961 250.513 255.961 245.04V109.86C255.961 104.387 251.524 99.9502 246.051 99.9502Z" fill="white"/>
              <path d="M140.09 155.83H78.0898V172.83H140.09V155.83Z" fill="#DDDDDD"/>
              <path d="M208 189.09H78.1602V201.09H208V189.09Z" fill="#DDDDDD"/>
              <path d="M208 211.74H78.1602V223.74H208V211.74Z" fill="#DDDDDD"/>
              <path d="M107.091 132.8C124.145 132.8 137.971 118.975 137.971 101.92C137.971 84.8655 124.145 71.04 107.091 71.04C90.0364 71.04 76.2109 84.8655 76.2109 101.92C76.2109 118.975 90.0364 132.8 107.091 132.8Z" fill="#DDDDDD"/>
              </g>
              <defs>
              <clipPath id="clip0_16_2">
              <rect width="300" height="300" fill="white"/>
              </clipPath>
              </defs>
              </svg>
              `,
    rectangle: `<svg width="100%" height="100%" viewBox="0 0 300 300" fill="none" xmlns="http://www.w3.org/2000/svg">
                <title>image-svg</title>
                <defs>
                  <clipPath clipPathUnits="userSpaceOnUse" id="cp1">
                    <path d="m0 8h315.98v300h-315.98z"/>
                  </clipPath>
                </defs>
                <style>
                  .s0 { fill: #f3f3f3 } 
                  .s1 { fill: #ffffff } 
                  .s2 { fill: #dddddd } 
                </style>
                <g id="Clip-Path" clip-path="url(#cp1)">
                  <g id="Layer">
                    <path id="Layer" class="s0" d="m16.6 8h282.8c9.1 0 16.6 7.1 16.6 15.8v268.4c0 8.7-7.5 15.8-16.6 15.8h-282.8c-9.1 0-16.6-7.1-16.6-15.8v-268.4c0-8.7 7.5-15.8 16.6-15.8z"/>
                    <path id="Layer" class="s1" d="m52 89.9c0-5.5 4.4-9.9 9.9-9.9h192.2c5.5 0 9.9 4.4 9.9 9.9v135.2c0 5.5-4.4 9.9-9.9 9.9h-192.2c-5.5 0-9.9-4.4-9.9-9.9z"/>
                    <path id="Layer" class="s2" d="m153 167.9h85.8v12h-85.8z"/>
                    <path id="Layer" class="s2" d="m153.9 147.5h41v14h-41z"/>
                    <path id="Layer" class="s2" d="m207 123.3h19v15h-19z"/>
                    <path id="Layer" class="s2" d="m180 123.3h19v15h-19z"/>
                    <path id="Layer" class="s2" d="m154 123.3h19v15h-19z"/>
                    <path id="Layer" class="s2" d="m153 187.3h85.8v12h-85.8z"/>
                    <path id="Layer" fill-rule="evenodd" class="s2" d="m74 134h51.7c0.5 0 1.1 0.2 1.4 0.6 0.4 0.4 0.6 0.9 0.6 1.4v43.8c0 0.5-0.2 1-0.6 1.4-0.3 0.4-0.9 0.6-1.4 0.6h-51.7c-0.5 0-1-0.2-1.4-0.6-0.4-0.4-0.6-0.9-0.6-1.4v-43.8c0-0.5 0.2-1 0.6-1.4 0.4-0.4 0.9-0.6 1.4-0.6zm1.3 3.3v25.8l10.2-10.3c0.4-0.3 0.8-0.5 1.2-0.5 0.5 0 0.9 0.2 1.3 0.5l14.5 14.6 9.3-9.3c0.3-0.3 0.7-0.5 1.2-0.5 0.5 0 0.9 0.2 1.2 0.5l10.3 10.3v-31.1zm49.2 41.3v-5.6l-11.5-11.5-9.3 9.3c-0.3 0.3-0.7 0.5-1.2 0.5-0.4 0-0.9-0.2-1.2-0.5l-14.5-14.5-11.5 11.4v10.9z"/>
                  </g>
                </g>
                </svg>
                `
  },
  collageLayout: {
    one: `<svg width="100%" height="100%" viewBox="0 0 300 300" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g clip-path="url(#clip0_22_54)">
          <path d="M284.2 0H15.8C7.0739 0 0 7.0739 0 15.8V284.2C0 292.926 7.0739 300 15.8 300H284.2C292.926 300 300 292.926 300 284.2V15.8C300 7.0739 292.926 0 284.2 0Z" fill="#F3F3F3"></path>
          <rect x="64.64" y="74.66" width="103" height="76.93" fill="#DDDDDD"></rect>
          <rect x="173.94" y="74.66" width="63.47" height="76.93" fill="#DDDDDD"></rect>
          <rect x="64.64" y="158.62" width="54.83" height="80.53" fill="#DDDDDD"></rect>
          <rect x="124.19" y="158.62" width="54.83" height="80.53" fill="#DDDDDD"></rect>
          <rect x="183.52" y="158.62" width="54.83" height="80.53" fill="#DDDDDD"></rect>
          </g>
          <defs>
          <clipPath id="clip0_22_54">
          <rect width="300" height="300" fill="white"></rect>
          </clipPath>
          </defs>
          </svg>
          `,
    two: `<svg width="100%" height="100%" viewBox="0 0 300 300" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g clip-path="url(#clip0_22_54)">
            <path d="M284.2 0H15.8C7.0739 0 0 7.0739 0 15.8V284.2C0 292.926 7.0739 300 15.8 300H284.2C292.926 300 300 292.926 300 284.2V15.8C300 7.0739 292.926 0 284.2 0Z" fill="#F3F3F3"></path>
            <rect x="56.64" y="74.66" width="47.2" height="70.93" fill="#DDDDDD"></rect>
            <rect x="108.94" y="74.66" width="80.47" height="70.93" fill="#DDDDDD"></rect>
            <rect x="56.64" y="150.62" width="63.83" height="77.53" fill="#DDDDDD"></rect>
            <rect x="125.19" y="150.62" width="63.83" height="77.53" fill="#DDDDDD"></rect>
            <rect x="194.52" y="74.62" width="50.83" height="154" fill="#DDDDDD"></rect></g>
          <defs>
            <clipPath id="clip0_22_54">
              <rect width="300" height="300" fill="white"></rect>
            </clipPath>
          </defs>
          </svg>
          `
  },
  socialIcons: (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    id: "Layer_1",
    height: "24px",
    viewBox: "0 0 128 128",
    width: "24px",
    "data-name": "Layer 1"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("g", null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "m93.71 50.29h27.79a1.75 1.75 0 0 0 1.75-1.75v-11.56a6.1 6.1 0 0 0 -5.2-6.017 12.024 12.024 0 0 0 .817-1.921 11.83 11.83 0 1 0 -21.785 1.793c.023.044.051.084.075.128a6.1 6.1 0 0 0 -5.2 6.017v2.584l-4.095 2.285v-23.349a13.765 13.765 0 0 0 -13.747-13.75h-55.615a13.765 13.765 0 0 0 -13.75 13.75v91a13.765 13.765 0 0 0 13.75 13.75h55.615a13.765 13.765 0 0 0 13.75-13.75v-23.35l7.967 4.45a11.749 11.749 0 0 0 1.254 4.354c.024.046.053.088.077.133a6.1 6.1 0 0 0 -5.2 6.017v11.55a1.75 1.75 0 0 0 1.75 1.75h5.487.039s.026 0 .039 0h16.654.039s.025 0 .038 0h5.491a1.75 1.75 0 0 0 1.75-1.75v-11.554a6.093 6.093 0 0 0 -5.2-6.017 12 12 0 0 0 .819-1.926 11.822 11.822 0 1 0 -22.743-6.4l-8.263-4.611v-36.288l4.095-2.285v4.967a1.75 1.75 0 0 0 1.752 1.75zm26.04 50.81v9.8h-2.027v-3.507a1.75 1.75 0 0 0 -3.5 0v3.507h-13.232v-3.507a1.75 1.75 0 0 0 -3.5 0v3.507h-2.031v-9.8a2.6 2.6 0 0 1 2.6-2.59h1.829a11.786 11.786 0 0 0 15.42 0h1.851a2.593 2.593 0 0 1 2.59 2.59zm-15.95-18.965a8.335 8.335 0 1 1 -1.975 13.395l-.023-.021a8.317 8.317 0 0 1 2-13.374zm-85.3-73.885h55.615a10.264 10.264 0 0 1 10.2 9.189h-76a10.264 10.264 0 0 1 10.185-9.189zm55.615 111.5h-55.615a10.261 10.261 0 0 1 -10.25-10.25v-6.917h76.115v6.917a10.261 10.261 0 0 1 -10.25 10.25zm10.25-20.667h-76.115v-78.144h76.115v22.861l-12.386 6.915q-.283-.546-.589-1.076a1.747 1.747 0 0 0 -.219-.38 29.033 29.033 0 0 0 -16.823-13.03 1.734 1.734 0 0 0 -.234-.067 28.775 28.775 0 0 0 -15.626 0 1.815 1.815 0 0 0 -.207.059 29.034 29.034 0 0 0 -16.838 13.04 1.753 1.753 0 0 0 -.217.376 28.814 28.814 0 0 0 0 28.726 1.753 1.753 0 0 0 .217.376 29.035 29.035 0 0 0 16.857 13.042 1.743 1.743 0 0 0 .217.062 28.774 28.774 0 0 0 15.569 0 1.662 1.662 0 0 0 .222-.064 29.031 29.031 0 0 0 16.86-13.04 1.747 1.747 0 0 0 .219-.38q.306-.531.589-1.076l12.389 6.917zm-36.307-9.733v-9.9h9.142a27.968 27.968 0 0 1 -4.466 9.141 25.292 25.292 0 0 1 -4.676.759zm-8.176-.758a27.948 27.948 0 0 1 -4.466-9.141h9.142v9.9a25.265 25.265 0 0 1 -4.676-.759zm4.676-49.942v9.9h-9.142a27.939 27.939 0 0 1 4.466-9.141 25.265 25.265 0 0 1 4.676-.759zm8.176.758a27.978 27.978 0 0 1 4.466 9.141h-9.142v-9.9a25.292 25.292 0 0 1 4.676.759zm-4.676 36.543v-10.201h11.251a55.473 55.473 0 0 1 -1.219 10.2zm-13.532 0a55.568 55.568 0 0 1 -1.22-10.2h11.252v10.2zm10.032-23.9v10.2h-11.252a55.492 55.492 0 0 1 1.22-10.2zm3.5 10.2v-10.2h10.032a55.441 55.441 0 0 1 1.219 10.2zm12.783-13.7a38.788 38.788 0 0 0 -2.667-7.016 25.585 25.585 0 0 1 8.295 7.016zm-29.067 0h-5.628a25.606 25.606 0 0 1 8.3-7.016 38.788 38.788 0 0 0 -2.672 7.014zm-7.89 3.5h7.062a58.551 58.551 0 0 0 -1.141 10.2h-8.847a25.238 25.238 0 0 1 2.926-10.202zm5.921 13.7a58.529 58.529 0 0 0 1.141 10.2h-7.062a25.238 25.238 0 0 1 -2.926-10.2zm1.969 13.7a38.788 38.788 0 0 0 2.666 7.016 25.6 25.6 0 0 1 -8.294-7.016zm29.067 0h5.628a25.585 25.585 0 0 1 -8.295 7.016 38.743 38.743 0 0 0 2.667-7.016zm7.89-3.5h-7.062a58.519 58.519 0 0 0 1.141-10.2h8.847a25.223 25.223 0 0 1 -2.926 10.2zm-5.921-13.701a58.605 58.605 0 0 0 -1.14-10.2h7.061a25.223 25.223 0 0 1 2.926 10.2zm21.555 17.939-10.955-6.113a28.888 28.888 0 0 0 0-20.151l10.955-6.114zm19.435-62.169a8.331 8.331 0 0 1 9.627 13.371l-.025.025a8.331 8.331 0 1 1 -9.6-13.4zm-8.34 18.96a2.6 2.6 0 0 1 2.6-2.59h1.824a11.786 11.786 0 0 0 15.431 0h1.845a2.593 2.593 0 0 1 2.59 2.59v9.81h-2.027v-3.513a1.75 1.75 0 0 0 -3.5 0v3.513h-13.232v-3.513a1.75 1.75 0 0 0 -3.5 0v3.513h-2.031z",
    "data-original": "#000000",
    class: "active-path",
    "data-old_color": "#000000",
    fill: "#32373C"
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "m46.308 104.413a6.75 6.75 0 1 0 6.75 6.75 6.757 6.757 0 0 0 -6.75-6.75zm0 10a3.25 3.25 0 1 1 3.25-3.25 3.254 3.254 0 0 1 -3.25 3.25z",
    "data-original": "#000000",
    class: "active-path",
    "data-old_color": "#000000",
    fill: "#32373C"
  })), ' '),
  accordion: (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
    height: "24px",
    width: "24px",
    x: "0px",
    y: "0px",
    viewBox: "0 0 110 110",
    enableBackground: "new 0 0 110 110"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("g", null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M7,6v16v4v12v4v42v4v16h96V88v-4V42v-4V26v-4V6H7z M99,100H11V88h88V100z M99,84H11V42h88V84z M99,38H11V26h88V38z M11,22   V10h88v12H11z"
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("polygon", {
    points: "13,20 21,16 13,12  "
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("polygon", {
    points: "21,28 13,28 17,36  "
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("polygon", {
    points: "13,90 13,98 21,94  "
  }))),
  news1: (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
    id: "Capa_1",
    enableBackground: "new 0 0 512 512",
    height: "24",
    viewBox: "0 0 512 512",
    width: "24",
    xmlns: "http://www.w3.org/2000/svg"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("g", null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "m444.5 218.5c4.143 0 7.5-3.358 7.5-7.5v-90c0-4.142-3.357-7.5-7.5-7.5h-75c-4.143 0-7.5 3.358-7.5 7.5v90c0 4.142 3.357 7.5 7.5 7.5zm-67.5-90h60v75h-60z"
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "m504.5 53.5h-497c-4.142 0-7.5 3.358-7.5 7.5v390c0 4.142 3.358 7.5 7.5 7.5h497c4.143 0 7.5-3.358 7.5-7.5v-390c0-4.142-3.357-7.5-7.5-7.5zm-7.5 390h-482v-375h482z"
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "m37.5 428.5h437c4.143 0 7.5-3.358 7.5-7.5v-330c0-4.142-3.357-7.5-7.5-7.5h-437c-4.142 0-7.5 3.358-7.5 7.5v150c0 4.142 3.358 7.5 7.5 7.5s7.5-3.358 7.5-7.5v-142.5h422v315h-422v-142.5c0-4.142-3.358-7.5-7.5-7.5s-7.5 3.358-7.5 7.5v150c0 4.142 3.358 7.5 7.5 7.5z"
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "m263.5 391v-270c0-4.142-3.357-7.5-7.5-7.5-4.142 0-7.5 3.358-7.5 7.5v270c0 4.142 3.358 7.5 7.5 7.5 4.143 0 7.5-3.358 7.5-7.5z"
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "m278.5 271c0 4.142 3.357 7.5 7.5 7.5h158.5c4.143 0 7.5-3.358 7.5-7.5s-3.357-7.5-7.5-7.5h-158.5c-4.143 0-7.5 3.358-7.5 7.5z"
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "m286 308.5h158.5c4.143 0 7.5-3.358 7.5-7.5s-3.357-7.5-7.5-7.5h-158.5c-4.143 0-7.5 3.358-7.5 7.5s3.357 7.5 7.5 7.5z"
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "m286 338.5h158.5c4.143 0 7.5-3.358 7.5-7.5s-3.357-7.5-7.5-7.5h-158.5c-4.143 0-7.5 3.358-7.5 7.5s3.357 7.5 7.5 7.5z"
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "m226 398.5c4.142 0 7.5-3.358 7.5-7.5v-270c0-4.142-3.358-7.5-7.5-7.5h-158.5c-4.142 0-7.5 3.358-7.5 7.5v270c0 4.142 3.358 7.5 7.5 7.5zm-151-270h143.5v255h-143.5z"
  }))),
  news2: (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
    enableBackground: "new 0 0 64 64",
    height: "24",
    viewBox: "0 0 64 64",
    width: "24",
    xmlns: "http://www.w3.org/2000/svg"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "m61 3.998h-58c-1.654 0-3 1.346-3 3v52.004c0 .553.447 1 1 1h62c.553 0 1-.447 1-1v-52.004c0-1.654-1.346-3-3-3zm-31.995 41.005c-.547.006-.984.448-.984.998 0 .546.442.985.985.996h-27.006v-1.994zm-5.999-16.275 4.786 6.785-5.304 7.49h-9.553zm17.006-7.013 15.072 21.288h-30.145zm-10.977 23.288h2.969c-.547.006-.984.448-.984.998 0 .546.442.985.985.996h-2.96c.542-.011.98-.45.98-.996 0-.55-.443-.992-.99-.998zm2.999 0h2.973c-.547.006-.984.448-.984.998 0 .546.442.985.985.996h-2.964c.542-.011.98-.45.98-.996 0-.55-.443-.992-.99-.998zm3.003 0h26.963v1.994h-26.953c.542-.011.98-.45.98-.996 0-.55-.443-.992-.99-.998zm22.498-2-16.696-23.581c-.151-.214-.374-.344-.611-.395-.005-.001-.009-.004-.014-.005-.067-.014-.135-.005-.203-.005-.067 0-.134-.008-.2.004-.006.001-.011.005-.017.006-.236.051-.458.181-.609.394l-10.167 14.36-5.188-7.354c-.144-.203-.352-.325-.574-.381-.018-.005-.034-.017-.053-.021-.064-.013-.131-.004-.197-.004-.067 0-.133-.009-.199.004-.017.004-.032.015-.049.019-.225.056-.434.179-.577.382l-11.694 16.577h-8.487v-33.005h60v33.005zm-55.535 5.994h60v9.005h-60zm1-42.999h1.018c-.551.002-.993.448-.993 1s.452 1 1.005 1c.552 0 1-.448 1-1 0-.551-.447-.998-.997-1h2.983c-.55.002-.992.448-.992 1s.452 1 1.005 1c.552 0 1-.448 1-1 0-.551-.447-.998-.998-1h2.988c-.55.002-.992.448-.992 1s.452 1 1.005 1c.552 0 1-.448 1-1 0-.551-.447-.998-.997-1h50.965c.552 0 1 .449 1 1v1h-60v-1c0-.551.448-1 1-1z"
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "m48 50.997h-32c-.553 0-1 .447-1 1s.447 1 1 1h32c.553 0 1-.447 1-1s-.447-1-1-1z"
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "m40.993 54h-17.986c-.553 0-1 .447-1 1s.447 1 1 1h17.986c.553 0 1-.447 1-1s-.447-1-1-1z"
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "m6.706 23.294c-.391-.391-1.023-.391-1.414 0l-1.997 1.998c-.001 0-.002 0-.002.001-.195.195-.293.451-.293.707s.098.512.293.707l1.999 2c.195.195.451.293.707.293s.512-.098.707-.292c.391-.391.391-1.024 0-1.415l-1.292-1.293 1.292-1.292c.391-.391.391-1.023 0-1.414z"
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "m60.708 25.292-1.999-1.999c-.391-.391-1.023-.391-1.414 0s-.391 1.023 0 1.414l1.292 1.293-1.292 1.293c-.391.391-.391 1.024 0 1.415.195.194.451.292.707.292s.512-.098.707-.293l1.999-2c.195-.195.293-.451.293-.707s-.098-.512-.293-.708z"
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "m17.002 13.999c-2.206 0-4 1.794-4 4s1.794 4 4 4 4-1.794 4-4-1.794-4-4-4zm0 6c-1.103 0-2-.897-2-2s.897-2 2-2 2 .897 2 2-.898 2-2 2z"
  })),
  siteIdentity: (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
    id: "Capa_1",
    enableBackground: "new 0 0 512.003 512.003",
    height: "24",
    viewBox: "0 0 512.003 512.003",
    width: "24",
    xmlns: "http://www.w3.org/2000/svg"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("g", null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("g", null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "m511.045 374.814c-6.926-12.371-20.036-20.056-34.214-20.056h-4.09v-244.237c0-21.631-17.599-39.23-39.23-39.23h-355.019c-21.632 0-39.23 17.599-39.23 39.23v244.237h-4.09c-14.178 0-27.288 7.685-34.214 20.056-2.024 3.614-.734 8.185 2.88 10.208 2.43 1.572 7.701 1.195 10.208-2.88 4.277-7.639 12.372-12.384 21.126-12.384h71.54l-30.904 30.904c-4.438 4.438-6.883 10.34-6.883 16.617s2.445 12.179 6.883 16.617c.03.03.061.06.091.09 4.872 4.708 10.675 6.726 16.302 6.726 6.342 0 12.46-2.566 16.759-6.735.027-.027.055-.054.082-.081l53.584-53.584v9.521c0 12.958 10.542 23.5 23.5 23.5s23.5-10.542 23.5-23.5v-66.185c.087-5.219-1.612-10.207-4.821-14.312h105.071c4.142 0 7.5-3.358 7.5-7.5v-33.079c0-4.142-3.358-7.5-7.5-7.5h-107.748c-4.142 0-7.5 3.358-7.5 7.5v32.965c-2.715-1.078-5.599-1.653-8.503-1.644h-66.254c-12.958 0-23.5 10.542-23.5 23.5s10.542 23.5 23.5 23.5h9.521l-7.68 7.68h-34.72v-167.003h275.8c4.142 0 7.5-3.358 7.5-7.5s-3.358-7.5-7.5-7.5h-275.8v-21.35c0-1.5 1.22-2.72 2.72-2.72h333.11c1.5 0 2.72 1.22 2.72 2.72v21.35h-26.708c-4.142 0-7.5 3.358-7.5 7.5s3.358 7.5 7.5 7.5h26.708v167.003h-187.46c-4.142 0-7.5 3.358-7.5 7.5s3.358 7.5 7.5 7.5h238.749c8.754 0 16.849 4.745 21.126 12.384 2.141 2.767 5.247 5.201 10.208 2.88 3.615-2.023 4.904-6.594 2.88-10.208zm-301.417-98.557h92.746v18.079h-92.746zm-89.757 55.821c-4.687 0-8.5-3.813-8.5-8.5s3.813-8.5 8.5-8.5h66.283.025c2.131 0 4.488 1.052 6.158 2.75 1.074 1.091 2.342 2.949 2.289 5.598-.001.051-.001.102-.001.152v66.254c0 4.687-3.813 8.5-8.5 8.5s-8.5-3.813-8.5-8.5v-27.627c0-3.034-1.827-5.768-4.63-6.929-2.355-.975-5.003-.663-7.065.731-.02.014-.042.025-.062.039-.137.094-.269.195-.4.299-.194.151-.381.312-.559.481-.028.027-.061.048-.088.076l-.047.047c-.004.004-.009.009-.013.013l-66.279 66.278c-2.459 2.352-7.967 3.958-12.113.004-1.577-1.6-2.445-3.716-2.445-5.965 0-2.271.884-4.405 2.49-6.01l43.672-43.672c.025-.025.05-.049.074-.074l22.641-22.641c2.145-2.145 2.787-5.371 1.626-8.173-1.161-2.803-3.896-4.63-6.929-4.63h-27.627zm320.67-151.823v-28.85-.003c0-9.771-7.949-17.72-17.72-17.72h-333.11c-9.771 0-17.72 7.949-17.72 17.72v.003 28.85 174.503h-17.73v-244.237c0-13.36 10.87-24.23 24.23-24.23h355.02c13.361 0 24.23 10.87 24.23 24.23v244.237h-17.2z"
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "m404.14 105.507c-4.075 0-7.379 3.304-7.379 7.379s3.304 7.379 7.379 7.379 7.379-3.304 7.379-7.379c0-4.076-3.303-7.379-7.379-7.379z"
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "m429.203 105.507c-4.075 0-7.379 3.304-7.379 7.379s3.304 7.379 7.379 7.379 7.379-3.304 7.379-7.379c0-4.076-3.304-7.379-7.379-7.379z"
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "m140.583 105.385h-59.794c-4.142 0-7.5 3.358-7.5 7.5s3.358 7.5 7.5 7.5h59.794c4.142 0 7.5-3.358 7.5-7.5s-3.358-7.5-7.5-7.5z"
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "m348.303 210.289c0-4.142-3.358-7.5-7.5-7.5h-169.603c-4.142 0-7.5 3.358-7.5 7.5s3.358 7.5 7.5 7.5h169.604c4.141 0 7.499-3.358 7.499-7.5z"
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "m208.271 230.552c-4.142 0-7.5 3.358-7.5 7.5s3.358 7.5 7.5 7.5h95.46c4.142 0 7.5-3.358 7.5-7.5s-3.358-7.5-7.5-7.5z"
  })))),
  navigationMenu: (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
    width: "24px",
    height: "24px",
    enableBackground: "new 0 0 479.997 479.997",
    version: "1.1",
    viewBox: "0 0 480 480",
    xmlns: "http://www.w3.org/2000/svg"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "m400 79.997h-40v-72c-2e-3 -4.418-3.585-7.999-8.003-7.997-0.763 0-1.521 0.11-2.253 0.325l-272 80c-0.16 0-0.28 0.16-0.44 0.216-0.407 0.165-0.801 0.363-1.176 0.592-0.484 0.259-0.939 0.568-1.36 0.92-0.31 0.288-0.599 0.598-0.864 0.928-0.351 0.425-0.659 0.883-0.92 1.368-0.189 0.374-0.35 0.762-0.48 1.16-0.185 0.563-0.304 1.145-0.352 1.736 0 0.264-0.152 0.488-0.152 0.752v384c0 4.418 3.582 8 8 8h320c4.418 0 8-3.582 8-8v-384c0-4.419-3.581-8-8-8zm-56-61.312v61.312h-208.45l208.45-61.312zm48 445.31h-304v-368h304v368z"
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "m184 128c-2.807 1e-3 -5.407 1.472-6.854 3.878l-17.144 28.568-17.144-28.568c-2.277-3.786-7.192-5.01-10.979-2.733-2.405 1.446-3.877 4.047-3.878 6.853v64c0 4.418 3.582 8 8 8s8-3.582 8-8v-35.12l9.144 15.24c2.595 3.786 7.769 4.752 11.555 2.157 0.846-0.58 1.577-1.311 2.157-2.157l9.144-15.24v35.12c0 4.418 3.582 8 8 8s8-3.582 8-8v-64c0-4.419-3.583-7.999-8.001-7.998z"
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "m232 176c4.418 0 8-3.582 8-8s-3.582-8-8-8h-16v-16h16c4.418 0 8-3.582 8-8s-3.582-8-8-8h-24c-4.418 0-8 3.582-8 8v64c0 4.418 3.582 8 8 8h24c4.418 0 8-3.582 8-8s-3.582-8-8-8h-16v-16h16z"
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "m288 128c-4.418 0-8 3.582-8 8v30.112l-16.8-33.688c-1.925-3.977-6.71-5.64-10.687-3.714-2.79 1.351-4.548 4.191-4.513 7.29v64c0 4.418 3.582 8 8 8s8-3.582 8-8v-30.112l16.8 33.688c1.925 3.977 6.71 5.64 10.687 3.714 2.79-1.351 4.548-4.191 4.513-7.29v-64c0-4.419-3.581-8-8-8z"
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "m344 128c-4.418 0-8 3.582-8 8v48c0 4.418-3.582 8-8 8s-8-3.582-8-8v-48c0-4.418-3.582-8-8-8s-8 3.582-8 8v48c0 13.255 10.745 24 24 24s24-10.745 24-24v-48c0-4.419-3.581-8-8-8z"
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "m368 280h-256c-4.418 0-8 3.582-8 8s3.582 8 8 8h256c4.418 0 8-3.582 8-8s-3.581-8-8-8z"
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "m368 328h-256c-4.418 0-8 3.582-8 8s3.582 8 8 8h256c4.418 0 8-3.582 8-8s-3.581-8-8-8z"
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "m368 376h-256c-4.418 0-8 3.582-8 8s3.582 8 8 8h256c4.418 0 8-3.582 8-8s-3.581-8-8-8z"
  }))
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (svg);

/***/ }),

/***/ "./node_modules/lodash/_DataView.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/_DataView.js ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var getNative = __webpack_require__(/*! ./_getNative */ "./node_modules/lodash/_getNative.js"),
    root = __webpack_require__(/*! ./_root */ "./node_modules/lodash/_root.js");

/* Built-in method references that are verified to be native. */
var DataView = getNative(root, 'DataView');

module.exports = DataView;


/***/ }),

/***/ "./node_modules/lodash/_Hash.js":
/*!**************************************!*\
  !*** ./node_modules/lodash/_Hash.js ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var hashClear = __webpack_require__(/*! ./_hashClear */ "./node_modules/lodash/_hashClear.js"),
    hashDelete = __webpack_require__(/*! ./_hashDelete */ "./node_modules/lodash/_hashDelete.js"),
    hashGet = __webpack_require__(/*! ./_hashGet */ "./node_modules/lodash/_hashGet.js"),
    hashHas = __webpack_require__(/*! ./_hashHas */ "./node_modules/lodash/_hashHas.js"),
    hashSet = __webpack_require__(/*! ./_hashSet */ "./node_modules/lodash/_hashSet.js");

/**
 * Creates a hash object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function Hash(entries) {
  var index = -1,
      length = entries == null ? 0 : entries.length;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

// Add methods to `Hash`.
Hash.prototype.clear = hashClear;
Hash.prototype['delete'] = hashDelete;
Hash.prototype.get = hashGet;
Hash.prototype.has = hashHas;
Hash.prototype.set = hashSet;

module.exports = Hash;


/***/ }),

/***/ "./node_modules/lodash/_ListCache.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash/_ListCache.js ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var listCacheClear = __webpack_require__(/*! ./_listCacheClear */ "./node_modules/lodash/_listCacheClear.js"),
    listCacheDelete = __webpack_require__(/*! ./_listCacheDelete */ "./node_modules/lodash/_listCacheDelete.js"),
    listCacheGet = __webpack_require__(/*! ./_listCacheGet */ "./node_modules/lodash/_listCacheGet.js"),
    listCacheHas = __webpack_require__(/*! ./_listCacheHas */ "./node_modules/lodash/_listCacheHas.js"),
    listCacheSet = __webpack_require__(/*! ./_listCacheSet */ "./node_modules/lodash/_listCacheSet.js");

/**
 * Creates an list cache object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function ListCache(entries) {
  var index = -1,
      length = entries == null ? 0 : entries.length;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

// Add methods to `ListCache`.
ListCache.prototype.clear = listCacheClear;
ListCache.prototype['delete'] = listCacheDelete;
ListCache.prototype.get = listCacheGet;
ListCache.prototype.has = listCacheHas;
ListCache.prototype.set = listCacheSet;

module.exports = ListCache;


/***/ }),

/***/ "./node_modules/lodash/_Map.js":
/*!*************************************!*\
  !*** ./node_modules/lodash/_Map.js ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var getNative = __webpack_require__(/*! ./_getNative */ "./node_modules/lodash/_getNative.js"),
    root = __webpack_require__(/*! ./_root */ "./node_modules/lodash/_root.js");

/* Built-in method references that are verified to be native. */
var Map = getNative(root, 'Map');

module.exports = Map;


/***/ }),

/***/ "./node_modules/lodash/_MapCache.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/_MapCache.js ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var mapCacheClear = __webpack_require__(/*! ./_mapCacheClear */ "./node_modules/lodash/_mapCacheClear.js"),
    mapCacheDelete = __webpack_require__(/*! ./_mapCacheDelete */ "./node_modules/lodash/_mapCacheDelete.js"),
    mapCacheGet = __webpack_require__(/*! ./_mapCacheGet */ "./node_modules/lodash/_mapCacheGet.js"),
    mapCacheHas = __webpack_require__(/*! ./_mapCacheHas */ "./node_modules/lodash/_mapCacheHas.js"),
    mapCacheSet = __webpack_require__(/*! ./_mapCacheSet */ "./node_modules/lodash/_mapCacheSet.js");

/**
 * Creates a map cache object to store key-value pairs.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function MapCache(entries) {
  var index = -1,
      length = entries == null ? 0 : entries.length;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

// Add methods to `MapCache`.
MapCache.prototype.clear = mapCacheClear;
MapCache.prototype['delete'] = mapCacheDelete;
MapCache.prototype.get = mapCacheGet;
MapCache.prototype.has = mapCacheHas;
MapCache.prototype.set = mapCacheSet;

module.exports = MapCache;


/***/ }),

/***/ "./node_modules/lodash/_Promise.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/_Promise.js ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var getNative = __webpack_require__(/*! ./_getNative */ "./node_modules/lodash/_getNative.js"),
    root = __webpack_require__(/*! ./_root */ "./node_modules/lodash/_root.js");

/* Built-in method references that are verified to be native. */
var Promise = getNative(root, 'Promise');

module.exports = Promise;


/***/ }),

/***/ "./node_modules/lodash/_Set.js":
/*!*************************************!*\
  !*** ./node_modules/lodash/_Set.js ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var getNative = __webpack_require__(/*! ./_getNative */ "./node_modules/lodash/_getNative.js"),
    root = __webpack_require__(/*! ./_root */ "./node_modules/lodash/_root.js");

/* Built-in method references that are verified to be native. */
var Set = getNative(root, 'Set');

module.exports = Set;


/***/ }),

/***/ "./node_modules/lodash/_SetCache.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/_SetCache.js ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var MapCache = __webpack_require__(/*! ./_MapCache */ "./node_modules/lodash/_MapCache.js"),
    setCacheAdd = __webpack_require__(/*! ./_setCacheAdd */ "./node_modules/lodash/_setCacheAdd.js"),
    setCacheHas = __webpack_require__(/*! ./_setCacheHas */ "./node_modules/lodash/_setCacheHas.js");

/**
 *
 * Creates an array cache object to store unique values.
 *
 * @private
 * @constructor
 * @param {Array} [values] The values to cache.
 */
function SetCache(values) {
  var index = -1,
      length = values == null ? 0 : values.length;

  this.__data__ = new MapCache;
  while (++index < length) {
    this.add(values[index]);
  }
}

// Add methods to `SetCache`.
SetCache.prototype.add = SetCache.prototype.push = setCacheAdd;
SetCache.prototype.has = setCacheHas;

module.exports = SetCache;


/***/ }),

/***/ "./node_modules/lodash/_Stack.js":
/*!***************************************!*\
  !*** ./node_modules/lodash/_Stack.js ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var ListCache = __webpack_require__(/*! ./_ListCache */ "./node_modules/lodash/_ListCache.js"),
    stackClear = __webpack_require__(/*! ./_stackClear */ "./node_modules/lodash/_stackClear.js"),
    stackDelete = __webpack_require__(/*! ./_stackDelete */ "./node_modules/lodash/_stackDelete.js"),
    stackGet = __webpack_require__(/*! ./_stackGet */ "./node_modules/lodash/_stackGet.js"),
    stackHas = __webpack_require__(/*! ./_stackHas */ "./node_modules/lodash/_stackHas.js"),
    stackSet = __webpack_require__(/*! ./_stackSet */ "./node_modules/lodash/_stackSet.js");

/**
 * Creates a stack cache object to store key-value pairs.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function Stack(entries) {
  var data = this.__data__ = new ListCache(entries);
  this.size = data.size;
}

// Add methods to `Stack`.
Stack.prototype.clear = stackClear;
Stack.prototype['delete'] = stackDelete;
Stack.prototype.get = stackGet;
Stack.prototype.has = stackHas;
Stack.prototype.set = stackSet;

module.exports = Stack;


/***/ }),

/***/ "./node_modules/lodash/_Symbol.js":
/*!****************************************!*\
  !*** ./node_modules/lodash/_Symbol.js ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var root = __webpack_require__(/*! ./_root */ "./node_modules/lodash/_root.js");

/** Built-in value references. */
var Symbol = root.Symbol;

module.exports = Symbol;


/***/ }),

/***/ "./node_modules/lodash/_Uint8Array.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_Uint8Array.js ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var root = __webpack_require__(/*! ./_root */ "./node_modules/lodash/_root.js");

/** Built-in value references. */
var Uint8Array = root.Uint8Array;

module.exports = Uint8Array;


/***/ }),

/***/ "./node_modules/lodash/_WeakMap.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/_WeakMap.js ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var getNative = __webpack_require__(/*! ./_getNative */ "./node_modules/lodash/_getNative.js"),
    root = __webpack_require__(/*! ./_root */ "./node_modules/lodash/_root.js");

/* Built-in method references that are verified to be native. */
var WeakMap = getNative(root, 'WeakMap');

module.exports = WeakMap;


/***/ }),

/***/ "./node_modules/lodash/_apply.js":
/*!***************************************!*\
  !*** ./node_modules/lodash/_apply.js ***!
  \***************************************/
/***/ ((module) => {

/**
 * A faster alternative to `Function#apply`, this function invokes `func`
 * with the `this` binding of `thisArg` and the arguments of `args`.
 *
 * @private
 * @param {Function} func The function to invoke.
 * @param {*} thisArg The `this` binding of `func`.
 * @param {Array} args The arguments to invoke `func` with.
 * @returns {*} Returns the result of `func`.
 */
function apply(func, thisArg, args) {
  switch (args.length) {
    case 0: return func.call(thisArg);
    case 1: return func.call(thisArg, args[0]);
    case 2: return func.call(thisArg, args[0], args[1]);
    case 3: return func.call(thisArg, args[0], args[1], args[2]);
  }
  return func.apply(thisArg, args);
}

module.exports = apply;


/***/ }),

/***/ "./node_modules/lodash/_arrayFilter.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash/_arrayFilter.js ***!
  \*********************************************/
/***/ ((module) => {

/**
 * A specialized version of `_.filter` for arrays without support for
 * iteratee shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} predicate The function invoked per iteration.
 * @returns {Array} Returns the new filtered array.
 */
function arrayFilter(array, predicate) {
  var index = -1,
      length = array == null ? 0 : array.length,
      resIndex = 0,
      result = [];

  while (++index < length) {
    var value = array[index];
    if (predicate(value, index, array)) {
      result[resIndex++] = value;
    }
  }
  return result;
}

module.exports = arrayFilter;


/***/ }),

/***/ "./node_modules/lodash/_arrayIncludes.js":
/*!***********************************************!*\
  !*** ./node_modules/lodash/_arrayIncludes.js ***!
  \***********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseIndexOf = __webpack_require__(/*! ./_baseIndexOf */ "./node_modules/lodash/_baseIndexOf.js");

/**
 * A specialized version of `_.includes` for arrays without support for
 * specifying an index to search from.
 *
 * @private
 * @param {Array} [array] The array to inspect.
 * @param {*} target The value to search for.
 * @returns {boolean} Returns `true` if `target` is found, else `false`.
 */
function arrayIncludes(array, value) {
  var length = array == null ? 0 : array.length;
  return !!length && baseIndexOf(array, value, 0) > -1;
}

module.exports = arrayIncludes;


/***/ }),

/***/ "./node_modules/lodash/_arrayIncludesWith.js":
/*!***************************************************!*\
  !*** ./node_modules/lodash/_arrayIncludesWith.js ***!
  \***************************************************/
/***/ ((module) => {

/**
 * This function is like `arrayIncludes` except that it accepts a comparator.
 *
 * @private
 * @param {Array} [array] The array to inspect.
 * @param {*} target The value to search for.
 * @param {Function} comparator The comparator invoked per element.
 * @returns {boolean} Returns `true` if `target` is found, else `false`.
 */
function arrayIncludesWith(array, value, comparator) {
  var index = -1,
      length = array == null ? 0 : array.length;

  while (++index < length) {
    if (comparator(value, array[index])) {
      return true;
    }
  }
  return false;
}

module.exports = arrayIncludesWith;


/***/ }),

/***/ "./node_modules/lodash/_arrayLikeKeys.js":
/*!***********************************************!*\
  !*** ./node_modules/lodash/_arrayLikeKeys.js ***!
  \***********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseTimes = __webpack_require__(/*! ./_baseTimes */ "./node_modules/lodash/_baseTimes.js"),
    isArguments = __webpack_require__(/*! ./isArguments */ "./node_modules/lodash/isArguments.js"),
    isArray = __webpack_require__(/*! ./isArray */ "./node_modules/lodash/isArray.js"),
    isBuffer = __webpack_require__(/*! ./isBuffer */ "./node_modules/lodash/isBuffer.js"),
    isIndex = __webpack_require__(/*! ./_isIndex */ "./node_modules/lodash/_isIndex.js"),
    isTypedArray = __webpack_require__(/*! ./isTypedArray */ "./node_modules/lodash/isTypedArray.js");

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Creates an array of the enumerable property names of the array-like `value`.
 *
 * @private
 * @param {*} value The value to query.
 * @param {boolean} inherited Specify returning inherited property names.
 * @returns {Array} Returns the array of property names.
 */
function arrayLikeKeys(value, inherited) {
  var isArr = isArray(value),
      isArg = !isArr && isArguments(value),
      isBuff = !isArr && !isArg && isBuffer(value),
      isType = !isArr && !isArg && !isBuff && isTypedArray(value),
      skipIndexes = isArr || isArg || isBuff || isType,
      result = skipIndexes ? baseTimes(value.length, String) : [],
      length = result.length;

  for (var key in value) {
    if ((inherited || hasOwnProperty.call(value, key)) &&
        !(skipIndexes && (
           // Safari 9 has enumerable `arguments.length` in strict mode.
           key == 'length' ||
           // Node.js 0.10 has enumerable non-index properties on buffers.
           (isBuff && (key == 'offset' || key == 'parent')) ||
           // PhantomJS 2 has enumerable non-index properties on typed arrays.
           (isType && (key == 'buffer' || key == 'byteLength' || key == 'byteOffset')) ||
           // Skip index properties.
           isIndex(key, length)
        ))) {
      result.push(key);
    }
  }
  return result;
}

module.exports = arrayLikeKeys;


/***/ }),

/***/ "./node_modules/lodash/_arrayMap.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/_arrayMap.js ***!
  \******************************************/
/***/ ((module) => {

/**
 * A specialized version of `_.map` for arrays without support for iteratee
 * shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns the new mapped array.
 */
function arrayMap(array, iteratee) {
  var index = -1,
      length = array == null ? 0 : array.length,
      result = Array(length);

  while (++index < length) {
    result[index] = iteratee(array[index], index, array);
  }
  return result;
}

module.exports = arrayMap;


/***/ }),

/***/ "./node_modules/lodash/_arrayPush.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash/_arrayPush.js ***!
  \*******************************************/
/***/ ((module) => {

/**
 * Appends the elements of `values` to `array`.
 *
 * @private
 * @param {Array} array The array to modify.
 * @param {Array} values The values to append.
 * @returns {Array} Returns `array`.
 */
function arrayPush(array, values) {
  var index = -1,
      length = values.length,
      offset = array.length;

  while (++index < length) {
    array[offset + index] = values[index];
  }
  return array;
}

module.exports = arrayPush;


/***/ }),

/***/ "./node_modules/lodash/_arraySome.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash/_arraySome.js ***!
  \*******************************************/
/***/ ((module) => {

/**
 * A specialized version of `_.some` for arrays without support for iteratee
 * shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} predicate The function invoked per iteration.
 * @returns {boolean} Returns `true` if any element passes the predicate check,
 *  else `false`.
 */
function arraySome(array, predicate) {
  var index = -1,
      length = array == null ? 0 : array.length;

  while (++index < length) {
    if (predicate(array[index], index, array)) {
      return true;
    }
  }
  return false;
}

module.exports = arraySome;


/***/ }),

/***/ "./node_modules/lodash/_assignMergeValue.js":
/*!**************************************************!*\
  !*** ./node_modules/lodash/_assignMergeValue.js ***!
  \**************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseAssignValue = __webpack_require__(/*! ./_baseAssignValue */ "./node_modules/lodash/_baseAssignValue.js"),
    eq = __webpack_require__(/*! ./eq */ "./node_modules/lodash/eq.js");

/**
 * This function is like `assignValue` except that it doesn't assign
 * `undefined` values.
 *
 * @private
 * @param {Object} object The object to modify.
 * @param {string} key The key of the property to assign.
 * @param {*} value The value to assign.
 */
function assignMergeValue(object, key, value) {
  if ((value !== undefined && !eq(object[key], value)) ||
      (value === undefined && !(key in object))) {
    baseAssignValue(object, key, value);
  }
}

module.exports = assignMergeValue;


/***/ }),

/***/ "./node_modules/lodash/_assignValue.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash/_assignValue.js ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseAssignValue = __webpack_require__(/*! ./_baseAssignValue */ "./node_modules/lodash/_baseAssignValue.js"),
    eq = __webpack_require__(/*! ./eq */ "./node_modules/lodash/eq.js");

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Assigns `value` to `key` of `object` if the existing value is not equivalent
 * using [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * for equality comparisons.
 *
 * @private
 * @param {Object} object The object to modify.
 * @param {string} key The key of the property to assign.
 * @param {*} value The value to assign.
 */
function assignValue(object, key, value) {
  var objValue = object[key];
  if (!(hasOwnProperty.call(object, key) && eq(objValue, value)) ||
      (value === undefined && !(key in object))) {
    baseAssignValue(object, key, value);
  }
}

module.exports = assignValue;


/***/ }),

/***/ "./node_modules/lodash/_assocIndexOf.js":
/*!**********************************************!*\
  !*** ./node_modules/lodash/_assocIndexOf.js ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var eq = __webpack_require__(/*! ./eq */ "./node_modules/lodash/eq.js");

/**
 * Gets the index at which the `key` is found in `array` of key-value pairs.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {*} key The key to search for.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */
function assocIndexOf(array, key) {
  var length = array.length;
  while (length--) {
    if (eq(array[length][0], key)) {
      return length;
    }
  }
  return -1;
}

module.exports = assocIndexOf;


/***/ }),

/***/ "./node_modules/lodash/_baseAssignValue.js":
/*!*************************************************!*\
  !*** ./node_modules/lodash/_baseAssignValue.js ***!
  \*************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var defineProperty = __webpack_require__(/*! ./_defineProperty */ "./node_modules/lodash/_defineProperty.js");

/**
 * The base implementation of `assignValue` and `assignMergeValue` without
 * value checks.
 *
 * @private
 * @param {Object} object The object to modify.
 * @param {string} key The key of the property to assign.
 * @param {*} value The value to assign.
 */
function baseAssignValue(object, key, value) {
  if (key == '__proto__' && defineProperty) {
    defineProperty(object, key, {
      'configurable': true,
      'enumerable': true,
      'value': value,
      'writable': true
    });
  } else {
    object[key] = value;
  }
}

module.exports = baseAssignValue;


/***/ }),

/***/ "./node_modules/lodash/_baseCreate.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_baseCreate.js ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var isObject = __webpack_require__(/*! ./isObject */ "./node_modules/lodash/isObject.js");

/** Built-in value references. */
var objectCreate = Object.create;

/**
 * The base implementation of `_.create` without support for assigning
 * properties to the created object.
 *
 * @private
 * @param {Object} proto The object to inherit from.
 * @returns {Object} Returns the new object.
 */
var baseCreate = (function() {
  function object() {}
  return function(proto) {
    if (!isObject(proto)) {
      return {};
    }
    if (objectCreate) {
      return objectCreate(proto);
    }
    object.prototype = proto;
    var result = new object;
    object.prototype = undefined;
    return result;
  };
}());

module.exports = baseCreate;


/***/ }),

/***/ "./node_modules/lodash/_baseFindIndex.js":
/*!***********************************************!*\
  !*** ./node_modules/lodash/_baseFindIndex.js ***!
  \***********************************************/
/***/ ((module) => {

/**
 * The base implementation of `_.findIndex` and `_.findLastIndex` without
 * support for iteratee shorthands.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {Function} predicate The function invoked per iteration.
 * @param {number} fromIndex The index to search from.
 * @param {boolean} [fromRight] Specify iterating from right to left.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */
function baseFindIndex(array, predicate, fromIndex, fromRight) {
  var length = array.length,
      index = fromIndex + (fromRight ? 1 : -1);

  while ((fromRight ? index-- : ++index < length)) {
    if (predicate(array[index], index, array)) {
      return index;
    }
  }
  return -1;
}

module.exports = baseFindIndex;


/***/ }),

/***/ "./node_modules/lodash/_baseFlatten.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash/_baseFlatten.js ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var arrayPush = __webpack_require__(/*! ./_arrayPush */ "./node_modules/lodash/_arrayPush.js"),
    isFlattenable = __webpack_require__(/*! ./_isFlattenable */ "./node_modules/lodash/_isFlattenable.js");

/**
 * The base implementation of `_.flatten` with support for restricting flattening.
 *
 * @private
 * @param {Array} array The array to flatten.
 * @param {number} depth The maximum recursion depth.
 * @param {boolean} [predicate=isFlattenable] The function invoked per iteration.
 * @param {boolean} [isStrict] Restrict to values that pass `predicate` checks.
 * @param {Array} [result=[]] The initial result value.
 * @returns {Array} Returns the new flattened array.
 */
function baseFlatten(array, depth, predicate, isStrict, result) {
  var index = -1,
      length = array.length;

  predicate || (predicate = isFlattenable);
  result || (result = []);

  while (++index < length) {
    var value = array[index];
    if (depth > 0 && predicate(value)) {
      if (depth > 1) {
        // Recursively flatten arrays (susceptible to call stack limits).
        baseFlatten(value, depth - 1, predicate, isStrict, result);
      } else {
        arrayPush(result, value);
      }
    } else if (!isStrict) {
      result[result.length] = value;
    }
  }
  return result;
}

module.exports = baseFlatten;


/***/ }),

/***/ "./node_modules/lodash/_baseFor.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/_baseFor.js ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var createBaseFor = __webpack_require__(/*! ./_createBaseFor */ "./node_modules/lodash/_createBaseFor.js");

/**
 * The base implementation of `baseForOwn` which iterates over `object`
 * properties returned by `keysFunc` and invokes `iteratee` for each property.
 * Iteratee functions may exit iteration early by explicitly returning `false`.
 *
 * @private
 * @param {Object} object The object to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @param {Function} keysFunc The function to get the keys of `object`.
 * @returns {Object} Returns `object`.
 */
var baseFor = createBaseFor();

module.exports = baseFor;


/***/ }),

/***/ "./node_modules/lodash/_baseGet.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/_baseGet.js ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var castPath = __webpack_require__(/*! ./_castPath */ "./node_modules/lodash/_castPath.js"),
    toKey = __webpack_require__(/*! ./_toKey */ "./node_modules/lodash/_toKey.js");

/**
 * The base implementation of `_.get` without support for default values.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {Array|string} path The path of the property to get.
 * @returns {*} Returns the resolved value.
 */
function baseGet(object, path) {
  path = castPath(path, object);

  var index = 0,
      length = path.length;

  while (object != null && index < length) {
    object = object[toKey(path[index++])];
  }
  return (index && index == length) ? object : undefined;
}

module.exports = baseGet;


/***/ }),

/***/ "./node_modules/lodash/_baseGetAllKeys.js":
/*!************************************************!*\
  !*** ./node_modules/lodash/_baseGetAllKeys.js ***!
  \************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var arrayPush = __webpack_require__(/*! ./_arrayPush */ "./node_modules/lodash/_arrayPush.js"),
    isArray = __webpack_require__(/*! ./isArray */ "./node_modules/lodash/isArray.js");

/**
 * The base implementation of `getAllKeys` and `getAllKeysIn` which uses
 * `keysFunc` and `symbolsFunc` to get the enumerable property names and
 * symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {Function} keysFunc The function to get the keys of `object`.
 * @param {Function} symbolsFunc The function to get the symbols of `object`.
 * @returns {Array} Returns the array of property names and symbols.
 */
function baseGetAllKeys(object, keysFunc, symbolsFunc) {
  var result = keysFunc(object);
  return isArray(object) ? result : arrayPush(result, symbolsFunc(object));
}

module.exports = baseGetAllKeys;


/***/ }),

/***/ "./node_modules/lodash/_baseGetTag.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_baseGetTag.js ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var Symbol = __webpack_require__(/*! ./_Symbol */ "./node_modules/lodash/_Symbol.js"),
    getRawTag = __webpack_require__(/*! ./_getRawTag */ "./node_modules/lodash/_getRawTag.js"),
    objectToString = __webpack_require__(/*! ./_objectToString */ "./node_modules/lodash/_objectToString.js");

/** `Object#toString` result references. */
var nullTag = '[object Null]',
    undefinedTag = '[object Undefined]';

/** Built-in value references. */
var symToStringTag = Symbol ? Symbol.toStringTag : undefined;

/**
 * The base implementation of `getTag` without fallbacks for buggy environments.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */
function baseGetTag(value) {
  if (value == null) {
    return value === undefined ? undefinedTag : nullTag;
  }
  return (symToStringTag && symToStringTag in Object(value))
    ? getRawTag(value)
    : objectToString(value);
}

module.exports = baseGetTag;


/***/ }),

/***/ "./node_modules/lodash/_baseHas.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/_baseHas.js ***!
  \*****************************************/
/***/ ((module) => {

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * The base implementation of `_.has` without support for deep paths.
 *
 * @private
 * @param {Object} [object] The object to query.
 * @param {Array|string} key The key to check.
 * @returns {boolean} Returns `true` if `key` exists, else `false`.
 */
function baseHas(object, key) {
  return object != null && hasOwnProperty.call(object, key);
}

module.exports = baseHas;


/***/ }),

/***/ "./node_modules/lodash/_baseHasIn.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash/_baseHasIn.js ***!
  \*******************************************/
/***/ ((module) => {

/**
 * The base implementation of `_.hasIn` without support for deep paths.
 *
 * @private
 * @param {Object} [object] The object to query.
 * @param {Array|string} key The key to check.
 * @returns {boolean} Returns `true` if `key` exists, else `false`.
 */
function baseHasIn(object, key) {
  return object != null && key in Object(object);
}

module.exports = baseHasIn;


/***/ }),

/***/ "./node_modules/lodash/_baseIndexOf.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash/_baseIndexOf.js ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseFindIndex = __webpack_require__(/*! ./_baseFindIndex */ "./node_modules/lodash/_baseFindIndex.js"),
    baseIsNaN = __webpack_require__(/*! ./_baseIsNaN */ "./node_modules/lodash/_baseIsNaN.js"),
    strictIndexOf = __webpack_require__(/*! ./_strictIndexOf */ "./node_modules/lodash/_strictIndexOf.js");

/**
 * The base implementation of `_.indexOf` without `fromIndex` bounds checks.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {*} value The value to search for.
 * @param {number} fromIndex The index to search from.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */
function baseIndexOf(array, value, fromIndex) {
  return value === value
    ? strictIndexOf(array, value, fromIndex)
    : baseFindIndex(array, baseIsNaN, fromIndex);
}

module.exports = baseIndexOf;


/***/ }),

/***/ "./node_modules/lodash/_baseIsArguments.js":
/*!*************************************************!*\
  !*** ./node_modules/lodash/_baseIsArguments.js ***!
  \*************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseGetTag = __webpack_require__(/*! ./_baseGetTag */ "./node_modules/lodash/_baseGetTag.js"),
    isObjectLike = __webpack_require__(/*! ./isObjectLike */ "./node_modules/lodash/isObjectLike.js");

/** `Object#toString` result references. */
var argsTag = '[object Arguments]';

/**
 * The base implementation of `_.isArguments`.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
 */
function baseIsArguments(value) {
  return isObjectLike(value) && baseGetTag(value) == argsTag;
}

module.exports = baseIsArguments;


/***/ }),

/***/ "./node_modules/lodash/_baseIsEqual.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash/_baseIsEqual.js ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseIsEqualDeep = __webpack_require__(/*! ./_baseIsEqualDeep */ "./node_modules/lodash/_baseIsEqualDeep.js"),
    isObjectLike = __webpack_require__(/*! ./isObjectLike */ "./node_modules/lodash/isObjectLike.js");

/**
 * The base implementation of `_.isEqual` which supports partial comparisons
 * and tracks traversed objects.
 *
 * @private
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @param {boolean} bitmask The bitmask flags.
 *  1 - Unordered comparison
 *  2 - Partial comparison
 * @param {Function} [customizer] The function to customize comparisons.
 * @param {Object} [stack] Tracks traversed `value` and `other` objects.
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
 */
function baseIsEqual(value, other, bitmask, customizer, stack) {
  if (value === other) {
    return true;
  }
  if (value == null || other == null || (!isObjectLike(value) && !isObjectLike(other))) {
    return value !== value && other !== other;
  }
  return baseIsEqualDeep(value, other, bitmask, customizer, baseIsEqual, stack);
}

module.exports = baseIsEqual;


/***/ }),

/***/ "./node_modules/lodash/_baseIsEqualDeep.js":
/*!*************************************************!*\
  !*** ./node_modules/lodash/_baseIsEqualDeep.js ***!
  \*************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var Stack = __webpack_require__(/*! ./_Stack */ "./node_modules/lodash/_Stack.js"),
    equalArrays = __webpack_require__(/*! ./_equalArrays */ "./node_modules/lodash/_equalArrays.js"),
    equalByTag = __webpack_require__(/*! ./_equalByTag */ "./node_modules/lodash/_equalByTag.js"),
    equalObjects = __webpack_require__(/*! ./_equalObjects */ "./node_modules/lodash/_equalObjects.js"),
    getTag = __webpack_require__(/*! ./_getTag */ "./node_modules/lodash/_getTag.js"),
    isArray = __webpack_require__(/*! ./isArray */ "./node_modules/lodash/isArray.js"),
    isBuffer = __webpack_require__(/*! ./isBuffer */ "./node_modules/lodash/isBuffer.js"),
    isTypedArray = __webpack_require__(/*! ./isTypedArray */ "./node_modules/lodash/isTypedArray.js");

/** Used to compose bitmasks for value comparisons. */
var COMPARE_PARTIAL_FLAG = 1;

/** `Object#toString` result references. */
var argsTag = '[object Arguments]',
    arrayTag = '[object Array]',
    objectTag = '[object Object]';

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * A specialized version of `baseIsEqual` for arrays and objects which performs
 * deep comparisons and tracks traversed objects enabling objects with circular
 * references to be compared.
 *
 * @private
 * @param {Object} object The object to compare.
 * @param {Object} other The other object to compare.
 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
 * @param {Function} customizer The function to customize comparisons.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Object} [stack] Tracks traversed `object` and `other` objects.
 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
 */
function baseIsEqualDeep(object, other, bitmask, customizer, equalFunc, stack) {
  var objIsArr = isArray(object),
      othIsArr = isArray(other),
      objTag = objIsArr ? arrayTag : getTag(object),
      othTag = othIsArr ? arrayTag : getTag(other);

  objTag = objTag == argsTag ? objectTag : objTag;
  othTag = othTag == argsTag ? objectTag : othTag;

  var objIsObj = objTag == objectTag,
      othIsObj = othTag == objectTag,
      isSameTag = objTag == othTag;

  if (isSameTag && isBuffer(object)) {
    if (!isBuffer(other)) {
      return false;
    }
    objIsArr = true;
    objIsObj = false;
  }
  if (isSameTag && !objIsObj) {
    stack || (stack = new Stack);
    return (objIsArr || isTypedArray(object))
      ? equalArrays(object, other, bitmask, customizer, equalFunc, stack)
      : equalByTag(object, other, objTag, bitmask, customizer, equalFunc, stack);
  }
  if (!(bitmask & COMPARE_PARTIAL_FLAG)) {
    var objIsWrapped = objIsObj && hasOwnProperty.call(object, '__wrapped__'),
        othIsWrapped = othIsObj && hasOwnProperty.call(other, '__wrapped__');

    if (objIsWrapped || othIsWrapped) {
      var objUnwrapped = objIsWrapped ? object.value() : object,
          othUnwrapped = othIsWrapped ? other.value() : other;

      stack || (stack = new Stack);
      return equalFunc(objUnwrapped, othUnwrapped, bitmask, customizer, stack);
    }
  }
  if (!isSameTag) {
    return false;
  }
  stack || (stack = new Stack);
  return equalObjects(object, other, bitmask, customizer, equalFunc, stack);
}

module.exports = baseIsEqualDeep;


/***/ }),

/***/ "./node_modules/lodash/_baseIsMatch.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash/_baseIsMatch.js ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var Stack = __webpack_require__(/*! ./_Stack */ "./node_modules/lodash/_Stack.js"),
    baseIsEqual = __webpack_require__(/*! ./_baseIsEqual */ "./node_modules/lodash/_baseIsEqual.js");

/** Used to compose bitmasks for value comparisons. */
var COMPARE_PARTIAL_FLAG = 1,
    COMPARE_UNORDERED_FLAG = 2;

/**
 * The base implementation of `_.isMatch` without support for iteratee shorthands.
 *
 * @private
 * @param {Object} object The object to inspect.
 * @param {Object} source The object of property values to match.
 * @param {Array} matchData The property names, values, and compare flags to match.
 * @param {Function} [customizer] The function to customize comparisons.
 * @returns {boolean} Returns `true` if `object` is a match, else `false`.
 */
function baseIsMatch(object, source, matchData, customizer) {
  var index = matchData.length,
      length = index,
      noCustomizer = !customizer;

  if (object == null) {
    return !length;
  }
  object = Object(object);
  while (index--) {
    var data = matchData[index];
    if ((noCustomizer && data[2])
          ? data[1] !== object[data[0]]
          : !(data[0] in object)
        ) {
      return false;
    }
  }
  while (++index < length) {
    data = matchData[index];
    var key = data[0],
        objValue = object[key],
        srcValue = data[1];

    if (noCustomizer && data[2]) {
      if (objValue === undefined && !(key in object)) {
        return false;
      }
    } else {
      var stack = new Stack;
      if (customizer) {
        var result = customizer(objValue, srcValue, key, object, source, stack);
      }
      if (!(result === undefined
            ? baseIsEqual(srcValue, objValue, COMPARE_PARTIAL_FLAG | COMPARE_UNORDERED_FLAG, customizer, stack)
            : result
          )) {
        return false;
      }
    }
  }
  return true;
}

module.exports = baseIsMatch;


/***/ }),

/***/ "./node_modules/lodash/_baseIsNaN.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash/_baseIsNaN.js ***!
  \*******************************************/
/***/ ((module) => {

/**
 * The base implementation of `_.isNaN` without support for number objects.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is `NaN`, else `false`.
 */
function baseIsNaN(value) {
  return value !== value;
}

module.exports = baseIsNaN;


/***/ }),

/***/ "./node_modules/lodash/_baseIsNative.js":
/*!**********************************************!*\
  !*** ./node_modules/lodash/_baseIsNative.js ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var isFunction = __webpack_require__(/*! ./isFunction */ "./node_modules/lodash/isFunction.js"),
    isMasked = __webpack_require__(/*! ./_isMasked */ "./node_modules/lodash/_isMasked.js"),
    isObject = __webpack_require__(/*! ./isObject */ "./node_modules/lodash/isObject.js"),
    toSource = __webpack_require__(/*! ./_toSource */ "./node_modules/lodash/_toSource.js");

/**
 * Used to match `RegExp`
 * [syntax characters](http://ecma-international.org/ecma-262/7.0/#sec-patterns).
 */
var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;

/** Used to detect host constructors (Safari). */
var reIsHostCtor = /^\[object .+?Constructor\]$/;

/** Used for built-in method references. */
var funcProto = Function.prototype,
    objectProto = Object.prototype;

/** Used to resolve the decompiled source of functions. */
var funcToString = funcProto.toString;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/** Used to detect if a method is native. */
var reIsNative = RegExp('^' +
  funcToString.call(hasOwnProperty).replace(reRegExpChar, '\\$&')
  .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$'
);

/**
 * The base implementation of `_.isNative` without bad shim checks.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a native function,
 *  else `false`.
 */
function baseIsNative(value) {
  if (!isObject(value) || isMasked(value)) {
    return false;
  }
  var pattern = isFunction(value) ? reIsNative : reIsHostCtor;
  return pattern.test(toSource(value));
}

module.exports = baseIsNative;


/***/ }),

/***/ "./node_modules/lodash/_baseIsTypedArray.js":
/*!**************************************************!*\
  !*** ./node_modules/lodash/_baseIsTypedArray.js ***!
  \**************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseGetTag = __webpack_require__(/*! ./_baseGetTag */ "./node_modules/lodash/_baseGetTag.js"),
    isLength = __webpack_require__(/*! ./isLength */ "./node_modules/lodash/isLength.js"),
    isObjectLike = __webpack_require__(/*! ./isObjectLike */ "./node_modules/lodash/isObjectLike.js");

/** `Object#toString` result references. */
var argsTag = '[object Arguments]',
    arrayTag = '[object Array]',
    boolTag = '[object Boolean]',
    dateTag = '[object Date]',
    errorTag = '[object Error]',
    funcTag = '[object Function]',
    mapTag = '[object Map]',
    numberTag = '[object Number]',
    objectTag = '[object Object]',
    regexpTag = '[object RegExp]',
    setTag = '[object Set]',
    stringTag = '[object String]',
    weakMapTag = '[object WeakMap]';

var arrayBufferTag = '[object ArrayBuffer]',
    dataViewTag = '[object DataView]',
    float32Tag = '[object Float32Array]',
    float64Tag = '[object Float64Array]',
    int8Tag = '[object Int8Array]',
    int16Tag = '[object Int16Array]',
    int32Tag = '[object Int32Array]',
    uint8Tag = '[object Uint8Array]',
    uint8ClampedTag = '[object Uint8ClampedArray]',
    uint16Tag = '[object Uint16Array]',
    uint32Tag = '[object Uint32Array]';

/** Used to identify `toStringTag` values of typed arrays. */
var typedArrayTags = {};
typedArrayTags[float32Tag] = typedArrayTags[float64Tag] =
typedArrayTags[int8Tag] = typedArrayTags[int16Tag] =
typedArrayTags[int32Tag] = typedArrayTags[uint8Tag] =
typedArrayTags[uint8ClampedTag] = typedArrayTags[uint16Tag] =
typedArrayTags[uint32Tag] = true;
typedArrayTags[argsTag] = typedArrayTags[arrayTag] =
typedArrayTags[arrayBufferTag] = typedArrayTags[boolTag] =
typedArrayTags[dataViewTag] = typedArrayTags[dateTag] =
typedArrayTags[errorTag] = typedArrayTags[funcTag] =
typedArrayTags[mapTag] = typedArrayTags[numberTag] =
typedArrayTags[objectTag] = typedArrayTags[regexpTag] =
typedArrayTags[setTag] = typedArrayTags[stringTag] =
typedArrayTags[weakMapTag] = false;

/**
 * The base implementation of `_.isTypedArray` without Node.js optimizations.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
 */
function baseIsTypedArray(value) {
  return isObjectLike(value) &&
    isLength(value.length) && !!typedArrayTags[baseGetTag(value)];
}

module.exports = baseIsTypedArray;


/***/ }),

/***/ "./node_modules/lodash/_baseIteratee.js":
/*!**********************************************!*\
  !*** ./node_modules/lodash/_baseIteratee.js ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseMatches = __webpack_require__(/*! ./_baseMatches */ "./node_modules/lodash/_baseMatches.js"),
    baseMatchesProperty = __webpack_require__(/*! ./_baseMatchesProperty */ "./node_modules/lodash/_baseMatchesProperty.js"),
    identity = __webpack_require__(/*! ./identity */ "./node_modules/lodash/identity.js"),
    isArray = __webpack_require__(/*! ./isArray */ "./node_modules/lodash/isArray.js"),
    property = __webpack_require__(/*! ./property */ "./node_modules/lodash/property.js");

/**
 * The base implementation of `_.iteratee`.
 *
 * @private
 * @param {*} [value=_.identity] The value to convert to an iteratee.
 * @returns {Function} Returns the iteratee.
 */
function baseIteratee(value) {
  // Don't store the `typeof` result in a variable to avoid a JIT bug in Safari 9.
  // See https://bugs.webkit.org/show_bug.cgi?id=156034 for more details.
  if (typeof value == 'function') {
    return value;
  }
  if (value == null) {
    return identity;
  }
  if (typeof value == 'object') {
    return isArray(value)
      ? baseMatchesProperty(value[0], value[1])
      : baseMatches(value);
  }
  return property(value);
}

module.exports = baseIteratee;


/***/ }),

/***/ "./node_modules/lodash/_baseKeys.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/_baseKeys.js ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var isPrototype = __webpack_require__(/*! ./_isPrototype */ "./node_modules/lodash/_isPrototype.js"),
    nativeKeys = __webpack_require__(/*! ./_nativeKeys */ "./node_modules/lodash/_nativeKeys.js");

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * The base implementation of `_.keys` which doesn't treat sparse arrays as dense.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 */
function baseKeys(object) {
  if (!isPrototype(object)) {
    return nativeKeys(object);
  }
  var result = [];
  for (var key in Object(object)) {
    if (hasOwnProperty.call(object, key) && key != 'constructor') {
      result.push(key);
    }
  }
  return result;
}

module.exports = baseKeys;


/***/ }),

/***/ "./node_modules/lodash/_baseKeysIn.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_baseKeysIn.js ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var isObject = __webpack_require__(/*! ./isObject */ "./node_modules/lodash/isObject.js"),
    isPrototype = __webpack_require__(/*! ./_isPrototype */ "./node_modules/lodash/_isPrototype.js"),
    nativeKeysIn = __webpack_require__(/*! ./_nativeKeysIn */ "./node_modules/lodash/_nativeKeysIn.js");

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * The base implementation of `_.keysIn` which doesn't treat sparse arrays as dense.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 */
function baseKeysIn(object) {
  if (!isObject(object)) {
    return nativeKeysIn(object);
  }
  var isProto = isPrototype(object),
      result = [];

  for (var key in object) {
    if (!(key == 'constructor' && (isProto || !hasOwnProperty.call(object, key)))) {
      result.push(key);
    }
  }
  return result;
}

module.exports = baseKeysIn;


/***/ }),

/***/ "./node_modules/lodash/_baseMatches.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash/_baseMatches.js ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseIsMatch = __webpack_require__(/*! ./_baseIsMatch */ "./node_modules/lodash/_baseIsMatch.js"),
    getMatchData = __webpack_require__(/*! ./_getMatchData */ "./node_modules/lodash/_getMatchData.js"),
    matchesStrictComparable = __webpack_require__(/*! ./_matchesStrictComparable */ "./node_modules/lodash/_matchesStrictComparable.js");

/**
 * The base implementation of `_.matches` which doesn't clone `source`.
 *
 * @private
 * @param {Object} source The object of property values to match.
 * @returns {Function} Returns the new spec function.
 */
function baseMatches(source) {
  var matchData = getMatchData(source);
  if (matchData.length == 1 && matchData[0][2]) {
    return matchesStrictComparable(matchData[0][0], matchData[0][1]);
  }
  return function(object) {
    return object === source || baseIsMatch(object, source, matchData);
  };
}

module.exports = baseMatches;


/***/ }),

/***/ "./node_modules/lodash/_baseMatchesProperty.js":
/*!*****************************************************!*\
  !*** ./node_modules/lodash/_baseMatchesProperty.js ***!
  \*****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseIsEqual = __webpack_require__(/*! ./_baseIsEqual */ "./node_modules/lodash/_baseIsEqual.js"),
    get = __webpack_require__(/*! ./get */ "./node_modules/lodash/get.js"),
    hasIn = __webpack_require__(/*! ./hasIn */ "./node_modules/lodash/hasIn.js"),
    isKey = __webpack_require__(/*! ./_isKey */ "./node_modules/lodash/_isKey.js"),
    isStrictComparable = __webpack_require__(/*! ./_isStrictComparable */ "./node_modules/lodash/_isStrictComparable.js"),
    matchesStrictComparable = __webpack_require__(/*! ./_matchesStrictComparable */ "./node_modules/lodash/_matchesStrictComparable.js"),
    toKey = __webpack_require__(/*! ./_toKey */ "./node_modules/lodash/_toKey.js");

/** Used to compose bitmasks for value comparisons. */
var COMPARE_PARTIAL_FLAG = 1,
    COMPARE_UNORDERED_FLAG = 2;

/**
 * The base implementation of `_.matchesProperty` which doesn't clone `srcValue`.
 *
 * @private
 * @param {string} path The path of the property to get.
 * @param {*} srcValue The value to match.
 * @returns {Function} Returns the new spec function.
 */
function baseMatchesProperty(path, srcValue) {
  if (isKey(path) && isStrictComparable(srcValue)) {
    return matchesStrictComparable(toKey(path), srcValue);
  }
  return function(object) {
    var objValue = get(object, path);
    return (objValue === undefined && objValue === srcValue)
      ? hasIn(object, path)
      : baseIsEqual(srcValue, objValue, COMPARE_PARTIAL_FLAG | COMPARE_UNORDERED_FLAG);
  };
}

module.exports = baseMatchesProperty;


/***/ }),

/***/ "./node_modules/lodash/_baseMerge.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash/_baseMerge.js ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var Stack = __webpack_require__(/*! ./_Stack */ "./node_modules/lodash/_Stack.js"),
    assignMergeValue = __webpack_require__(/*! ./_assignMergeValue */ "./node_modules/lodash/_assignMergeValue.js"),
    baseFor = __webpack_require__(/*! ./_baseFor */ "./node_modules/lodash/_baseFor.js"),
    baseMergeDeep = __webpack_require__(/*! ./_baseMergeDeep */ "./node_modules/lodash/_baseMergeDeep.js"),
    isObject = __webpack_require__(/*! ./isObject */ "./node_modules/lodash/isObject.js"),
    keysIn = __webpack_require__(/*! ./keysIn */ "./node_modules/lodash/keysIn.js"),
    safeGet = __webpack_require__(/*! ./_safeGet */ "./node_modules/lodash/_safeGet.js");

/**
 * The base implementation of `_.merge` without support for multiple sources.
 *
 * @private
 * @param {Object} object The destination object.
 * @param {Object} source The source object.
 * @param {number} srcIndex The index of `source`.
 * @param {Function} [customizer] The function to customize merged values.
 * @param {Object} [stack] Tracks traversed source values and their merged
 *  counterparts.
 */
function baseMerge(object, source, srcIndex, customizer, stack) {
  if (object === source) {
    return;
  }
  baseFor(source, function(srcValue, key) {
    stack || (stack = new Stack);
    if (isObject(srcValue)) {
      baseMergeDeep(object, source, key, srcIndex, baseMerge, customizer, stack);
    }
    else {
      var newValue = customizer
        ? customizer(safeGet(object, key), srcValue, (key + ''), object, source, stack)
        : undefined;

      if (newValue === undefined) {
        newValue = srcValue;
      }
      assignMergeValue(object, key, newValue);
    }
  }, keysIn);
}

module.exports = baseMerge;


/***/ }),

/***/ "./node_modules/lodash/_baseMergeDeep.js":
/*!***********************************************!*\
  !*** ./node_modules/lodash/_baseMergeDeep.js ***!
  \***********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var assignMergeValue = __webpack_require__(/*! ./_assignMergeValue */ "./node_modules/lodash/_assignMergeValue.js"),
    cloneBuffer = __webpack_require__(/*! ./_cloneBuffer */ "./node_modules/lodash/_cloneBuffer.js"),
    cloneTypedArray = __webpack_require__(/*! ./_cloneTypedArray */ "./node_modules/lodash/_cloneTypedArray.js"),
    copyArray = __webpack_require__(/*! ./_copyArray */ "./node_modules/lodash/_copyArray.js"),
    initCloneObject = __webpack_require__(/*! ./_initCloneObject */ "./node_modules/lodash/_initCloneObject.js"),
    isArguments = __webpack_require__(/*! ./isArguments */ "./node_modules/lodash/isArguments.js"),
    isArray = __webpack_require__(/*! ./isArray */ "./node_modules/lodash/isArray.js"),
    isArrayLikeObject = __webpack_require__(/*! ./isArrayLikeObject */ "./node_modules/lodash/isArrayLikeObject.js"),
    isBuffer = __webpack_require__(/*! ./isBuffer */ "./node_modules/lodash/isBuffer.js"),
    isFunction = __webpack_require__(/*! ./isFunction */ "./node_modules/lodash/isFunction.js"),
    isObject = __webpack_require__(/*! ./isObject */ "./node_modules/lodash/isObject.js"),
    isPlainObject = __webpack_require__(/*! ./isPlainObject */ "./node_modules/lodash/isPlainObject.js"),
    isTypedArray = __webpack_require__(/*! ./isTypedArray */ "./node_modules/lodash/isTypedArray.js"),
    safeGet = __webpack_require__(/*! ./_safeGet */ "./node_modules/lodash/_safeGet.js"),
    toPlainObject = __webpack_require__(/*! ./toPlainObject */ "./node_modules/lodash/toPlainObject.js");

/**
 * A specialized version of `baseMerge` for arrays and objects which performs
 * deep merges and tracks traversed objects enabling objects with circular
 * references to be merged.
 *
 * @private
 * @param {Object} object The destination object.
 * @param {Object} source The source object.
 * @param {string} key The key of the value to merge.
 * @param {number} srcIndex The index of `source`.
 * @param {Function} mergeFunc The function to merge values.
 * @param {Function} [customizer] The function to customize assigned values.
 * @param {Object} [stack] Tracks traversed source values and their merged
 *  counterparts.
 */
function baseMergeDeep(object, source, key, srcIndex, mergeFunc, customizer, stack) {
  var objValue = safeGet(object, key),
      srcValue = safeGet(source, key),
      stacked = stack.get(srcValue);

  if (stacked) {
    assignMergeValue(object, key, stacked);
    return;
  }
  var newValue = customizer
    ? customizer(objValue, srcValue, (key + ''), object, source, stack)
    : undefined;

  var isCommon = newValue === undefined;

  if (isCommon) {
    var isArr = isArray(srcValue),
        isBuff = !isArr && isBuffer(srcValue),
        isTyped = !isArr && !isBuff && isTypedArray(srcValue);

    newValue = srcValue;
    if (isArr || isBuff || isTyped) {
      if (isArray(objValue)) {
        newValue = objValue;
      }
      else if (isArrayLikeObject(objValue)) {
        newValue = copyArray(objValue);
      }
      else if (isBuff) {
        isCommon = false;
        newValue = cloneBuffer(srcValue, true);
      }
      else if (isTyped) {
        isCommon = false;
        newValue = cloneTypedArray(srcValue, true);
      }
      else {
        newValue = [];
      }
    }
    else if (isPlainObject(srcValue) || isArguments(srcValue)) {
      newValue = objValue;
      if (isArguments(objValue)) {
        newValue = toPlainObject(objValue);
      }
      else if (!isObject(objValue) || isFunction(objValue)) {
        newValue = initCloneObject(srcValue);
      }
    }
    else {
      isCommon = false;
    }
  }
  if (isCommon) {
    // Recursively merge objects and arrays (susceptible to call stack limits).
    stack.set(srcValue, newValue);
    mergeFunc(newValue, srcValue, srcIndex, customizer, stack);
    stack['delete'](srcValue);
  }
  assignMergeValue(object, key, newValue);
}

module.exports = baseMergeDeep;


/***/ }),

/***/ "./node_modules/lodash/_basePickBy.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_basePickBy.js ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseGet = __webpack_require__(/*! ./_baseGet */ "./node_modules/lodash/_baseGet.js"),
    baseSet = __webpack_require__(/*! ./_baseSet */ "./node_modules/lodash/_baseSet.js"),
    castPath = __webpack_require__(/*! ./_castPath */ "./node_modules/lodash/_castPath.js");

/**
 * The base implementation of  `_.pickBy` without support for iteratee shorthands.
 *
 * @private
 * @param {Object} object The source object.
 * @param {string[]} paths The property paths to pick.
 * @param {Function} predicate The function invoked per property.
 * @returns {Object} Returns the new object.
 */
function basePickBy(object, paths, predicate) {
  var index = -1,
      length = paths.length,
      result = {};

  while (++index < length) {
    var path = paths[index],
        value = baseGet(object, path);

    if (predicate(value, path)) {
      baseSet(result, castPath(path, object), value);
    }
  }
  return result;
}

module.exports = basePickBy;


/***/ }),

/***/ "./node_modules/lodash/_baseProperty.js":
/*!**********************************************!*\
  !*** ./node_modules/lodash/_baseProperty.js ***!
  \**********************************************/
/***/ ((module) => {

/**
 * The base implementation of `_.property` without support for deep paths.
 *
 * @private
 * @param {string} key The key of the property to get.
 * @returns {Function} Returns the new accessor function.
 */
function baseProperty(key) {
  return function(object) {
    return object == null ? undefined : object[key];
  };
}

module.exports = baseProperty;


/***/ }),

/***/ "./node_modules/lodash/_basePropertyDeep.js":
/*!**************************************************!*\
  !*** ./node_modules/lodash/_basePropertyDeep.js ***!
  \**************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseGet = __webpack_require__(/*! ./_baseGet */ "./node_modules/lodash/_baseGet.js");

/**
 * A specialized version of `baseProperty` which supports deep paths.
 *
 * @private
 * @param {Array|string} path The path of the property to get.
 * @returns {Function} Returns the new accessor function.
 */
function basePropertyDeep(path) {
  return function(object) {
    return baseGet(object, path);
  };
}

module.exports = basePropertyDeep;


/***/ }),

/***/ "./node_modules/lodash/_baseRest.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/_baseRest.js ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var identity = __webpack_require__(/*! ./identity */ "./node_modules/lodash/identity.js"),
    overRest = __webpack_require__(/*! ./_overRest */ "./node_modules/lodash/_overRest.js"),
    setToString = __webpack_require__(/*! ./_setToString */ "./node_modules/lodash/_setToString.js");

/**
 * The base implementation of `_.rest` which doesn't validate or coerce arguments.
 *
 * @private
 * @param {Function} func The function to apply a rest parameter to.
 * @param {number} [start=func.length-1] The start position of the rest parameter.
 * @returns {Function} Returns the new function.
 */
function baseRest(func, start) {
  return setToString(overRest(func, start, identity), func + '');
}

module.exports = baseRest;


/***/ }),

/***/ "./node_modules/lodash/_baseSet.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/_baseSet.js ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var assignValue = __webpack_require__(/*! ./_assignValue */ "./node_modules/lodash/_assignValue.js"),
    castPath = __webpack_require__(/*! ./_castPath */ "./node_modules/lodash/_castPath.js"),
    isIndex = __webpack_require__(/*! ./_isIndex */ "./node_modules/lodash/_isIndex.js"),
    isObject = __webpack_require__(/*! ./isObject */ "./node_modules/lodash/isObject.js"),
    toKey = __webpack_require__(/*! ./_toKey */ "./node_modules/lodash/_toKey.js");

/**
 * The base implementation of `_.set`.
 *
 * @private
 * @param {Object} object The object to modify.
 * @param {Array|string} path The path of the property to set.
 * @param {*} value The value to set.
 * @param {Function} [customizer] The function to customize path creation.
 * @returns {Object} Returns `object`.
 */
function baseSet(object, path, value, customizer) {
  if (!isObject(object)) {
    return object;
  }
  path = castPath(path, object);

  var index = -1,
      length = path.length,
      lastIndex = length - 1,
      nested = object;

  while (nested != null && ++index < length) {
    var key = toKey(path[index]),
        newValue = value;

    if (key === '__proto__' || key === 'constructor' || key === 'prototype') {
      return object;
    }

    if (index != lastIndex) {
      var objValue = nested[key];
      newValue = customizer ? customizer(objValue, key, nested) : undefined;
      if (newValue === undefined) {
        newValue = isObject(objValue)
          ? objValue
          : (isIndex(path[index + 1]) ? [] : {});
      }
    }
    assignValue(nested, key, newValue);
    nested = nested[key];
  }
  return object;
}

module.exports = baseSet;


/***/ }),

/***/ "./node_modules/lodash/_baseSetToString.js":
/*!*************************************************!*\
  !*** ./node_modules/lodash/_baseSetToString.js ***!
  \*************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var constant = __webpack_require__(/*! ./constant */ "./node_modules/lodash/constant.js"),
    defineProperty = __webpack_require__(/*! ./_defineProperty */ "./node_modules/lodash/_defineProperty.js"),
    identity = __webpack_require__(/*! ./identity */ "./node_modules/lodash/identity.js");

/**
 * The base implementation of `setToString` without support for hot loop shorting.
 *
 * @private
 * @param {Function} func The function to modify.
 * @param {Function} string The `toString` result.
 * @returns {Function} Returns `func`.
 */
var baseSetToString = !defineProperty ? identity : function(func, string) {
  return defineProperty(func, 'toString', {
    'configurable': true,
    'enumerable': false,
    'value': constant(string),
    'writable': true
  });
};

module.exports = baseSetToString;


/***/ }),

/***/ "./node_modules/lodash/_baseTimes.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash/_baseTimes.js ***!
  \*******************************************/
/***/ ((module) => {

/**
 * The base implementation of `_.times` without support for iteratee shorthands
 * or max array length checks.
 *
 * @private
 * @param {number} n The number of times to invoke `iteratee`.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns the array of results.
 */
function baseTimes(n, iteratee) {
  var index = -1,
      result = Array(n);

  while (++index < n) {
    result[index] = iteratee(index);
  }
  return result;
}

module.exports = baseTimes;


/***/ }),

/***/ "./node_modules/lodash/_baseToString.js":
/*!**********************************************!*\
  !*** ./node_modules/lodash/_baseToString.js ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var Symbol = __webpack_require__(/*! ./_Symbol */ "./node_modules/lodash/_Symbol.js"),
    arrayMap = __webpack_require__(/*! ./_arrayMap */ "./node_modules/lodash/_arrayMap.js"),
    isArray = __webpack_require__(/*! ./isArray */ "./node_modules/lodash/isArray.js"),
    isSymbol = __webpack_require__(/*! ./isSymbol */ "./node_modules/lodash/isSymbol.js");

/** Used as references for various `Number` constants. */
var INFINITY = 1 / 0;

/** Used to convert symbols to primitives and strings. */
var symbolProto = Symbol ? Symbol.prototype : undefined,
    symbolToString = symbolProto ? symbolProto.toString : undefined;

/**
 * The base implementation of `_.toString` which doesn't convert nullish
 * values to empty strings.
 *
 * @private
 * @param {*} value The value to process.
 * @returns {string} Returns the string.
 */
function baseToString(value) {
  // Exit early for strings to avoid a performance hit in some environments.
  if (typeof value == 'string') {
    return value;
  }
  if (isArray(value)) {
    // Recursively convert values (susceptible to call stack limits).
    return arrayMap(value, baseToString) + '';
  }
  if (isSymbol(value)) {
    return symbolToString ? symbolToString.call(value) : '';
  }
  var result = (value + '');
  return (result == '0' && (1 / value) == -INFINITY) ? '-0' : result;
}

module.exports = baseToString;


/***/ }),

/***/ "./node_modules/lodash/_baseTrim.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/_baseTrim.js ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var trimmedEndIndex = __webpack_require__(/*! ./_trimmedEndIndex */ "./node_modules/lodash/_trimmedEndIndex.js");

/** Used to match leading whitespace. */
var reTrimStart = /^\s+/;

/**
 * The base implementation of `_.trim`.
 *
 * @private
 * @param {string} string The string to trim.
 * @returns {string} Returns the trimmed string.
 */
function baseTrim(string) {
  return string
    ? string.slice(0, trimmedEndIndex(string) + 1).replace(reTrimStart, '')
    : string;
}

module.exports = baseTrim;


/***/ }),

/***/ "./node_modules/lodash/_baseUnary.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash/_baseUnary.js ***!
  \*******************************************/
/***/ ((module) => {

/**
 * The base implementation of `_.unary` without support for storing metadata.
 *
 * @private
 * @param {Function} func The function to cap arguments for.
 * @returns {Function} Returns the new capped function.
 */
function baseUnary(func) {
  return function(value) {
    return func(value);
  };
}

module.exports = baseUnary;


/***/ }),

/***/ "./node_modules/lodash/_baseUniq.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/_baseUniq.js ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var SetCache = __webpack_require__(/*! ./_SetCache */ "./node_modules/lodash/_SetCache.js"),
    arrayIncludes = __webpack_require__(/*! ./_arrayIncludes */ "./node_modules/lodash/_arrayIncludes.js"),
    arrayIncludesWith = __webpack_require__(/*! ./_arrayIncludesWith */ "./node_modules/lodash/_arrayIncludesWith.js"),
    cacheHas = __webpack_require__(/*! ./_cacheHas */ "./node_modules/lodash/_cacheHas.js"),
    createSet = __webpack_require__(/*! ./_createSet */ "./node_modules/lodash/_createSet.js"),
    setToArray = __webpack_require__(/*! ./_setToArray */ "./node_modules/lodash/_setToArray.js");

/** Used as the size to enable large array optimizations. */
var LARGE_ARRAY_SIZE = 200;

/**
 * The base implementation of `_.uniqBy` without support for iteratee shorthands.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {Function} [iteratee] The iteratee invoked per element.
 * @param {Function} [comparator] The comparator invoked per element.
 * @returns {Array} Returns the new duplicate free array.
 */
function baseUniq(array, iteratee, comparator) {
  var index = -1,
      includes = arrayIncludes,
      length = array.length,
      isCommon = true,
      result = [],
      seen = result;

  if (comparator) {
    isCommon = false;
    includes = arrayIncludesWith;
  }
  else if (length >= LARGE_ARRAY_SIZE) {
    var set = iteratee ? null : createSet(array);
    if (set) {
      return setToArray(set);
    }
    isCommon = false;
    includes = cacheHas;
    seen = new SetCache;
  }
  else {
    seen = iteratee ? [] : result;
  }
  outer:
  while (++index < length) {
    var value = array[index],
        computed = iteratee ? iteratee(value) : value;

    value = (comparator || value !== 0) ? value : 0;
    if (isCommon && computed === computed) {
      var seenIndex = seen.length;
      while (seenIndex--) {
        if (seen[seenIndex] === computed) {
          continue outer;
        }
      }
      if (iteratee) {
        seen.push(computed);
      }
      result.push(value);
    }
    else if (!includes(seen, computed, comparator)) {
      if (seen !== result) {
        seen.push(computed);
      }
      result.push(value);
    }
  }
  return result;
}

module.exports = baseUniq;


/***/ }),

/***/ "./node_modules/lodash/_cacheHas.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/_cacheHas.js ***!
  \******************************************/
/***/ ((module) => {

/**
 * Checks if a `cache` value for `key` exists.
 *
 * @private
 * @param {Object} cache The cache to query.
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function cacheHas(cache, key) {
  return cache.has(key);
}

module.exports = cacheHas;


/***/ }),

/***/ "./node_modules/lodash/_castPath.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/_castPath.js ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var isArray = __webpack_require__(/*! ./isArray */ "./node_modules/lodash/isArray.js"),
    isKey = __webpack_require__(/*! ./_isKey */ "./node_modules/lodash/_isKey.js"),
    stringToPath = __webpack_require__(/*! ./_stringToPath */ "./node_modules/lodash/_stringToPath.js"),
    toString = __webpack_require__(/*! ./toString */ "./node_modules/lodash/toString.js");

/**
 * Casts `value` to a path array if it's not one.
 *
 * @private
 * @param {*} value The value to inspect.
 * @param {Object} [object] The object to query keys on.
 * @returns {Array} Returns the cast property path array.
 */
function castPath(value, object) {
  if (isArray(value)) {
    return value;
  }
  return isKey(value, object) ? [value] : stringToPath(toString(value));
}

module.exports = castPath;


/***/ }),

/***/ "./node_modules/lodash/_cloneArrayBuffer.js":
/*!**************************************************!*\
  !*** ./node_modules/lodash/_cloneArrayBuffer.js ***!
  \**************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var Uint8Array = __webpack_require__(/*! ./_Uint8Array */ "./node_modules/lodash/_Uint8Array.js");

/**
 * Creates a clone of `arrayBuffer`.
 *
 * @private
 * @param {ArrayBuffer} arrayBuffer The array buffer to clone.
 * @returns {ArrayBuffer} Returns the cloned array buffer.
 */
function cloneArrayBuffer(arrayBuffer) {
  var result = new arrayBuffer.constructor(arrayBuffer.byteLength);
  new Uint8Array(result).set(new Uint8Array(arrayBuffer));
  return result;
}

module.exports = cloneArrayBuffer;


/***/ }),

/***/ "./node_modules/lodash/_cloneBuffer.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash/_cloneBuffer.js ***!
  \*********************************************/
/***/ ((module, exports, __webpack_require__) => {

/* module decorator */ module = __webpack_require__.nmd(module);
var root = __webpack_require__(/*! ./_root */ "./node_modules/lodash/_root.js");

/** Detect free variable `exports`. */
var freeExports =  true && exports && !exports.nodeType && exports;

/** Detect free variable `module`. */
var freeModule = freeExports && "object" == 'object' && module && !module.nodeType && module;

/** Detect the popular CommonJS extension `module.exports`. */
var moduleExports = freeModule && freeModule.exports === freeExports;

/** Built-in value references. */
var Buffer = moduleExports ? root.Buffer : undefined,
    allocUnsafe = Buffer ? Buffer.allocUnsafe : undefined;

/**
 * Creates a clone of  `buffer`.
 *
 * @private
 * @param {Buffer} buffer The buffer to clone.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @returns {Buffer} Returns the cloned buffer.
 */
function cloneBuffer(buffer, isDeep) {
  if (isDeep) {
    return buffer.slice();
  }
  var length = buffer.length,
      result = allocUnsafe ? allocUnsafe(length) : new buffer.constructor(length);

  buffer.copy(result);
  return result;
}

module.exports = cloneBuffer;


/***/ }),

/***/ "./node_modules/lodash/_cloneTypedArray.js":
/*!*************************************************!*\
  !*** ./node_modules/lodash/_cloneTypedArray.js ***!
  \*************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var cloneArrayBuffer = __webpack_require__(/*! ./_cloneArrayBuffer */ "./node_modules/lodash/_cloneArrayBuffer.js");

/**
 * Creates a clone of `typedArray`.
 *
 * @private
 * @param {Object} typedArray The typed array to clone.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @returns {Object} Returns the cloned typed array.
 */
function cloneTypedArray(typedArray, isDeep) {
  var buffer = isDeep ? cloneArrayBuffer(typedArray.buffer) : typedArray.buffer;
  return new typedArray.constructor(buffer, typedArray.byteOffset, typedArray.length);
}

module.exports = cloneTypedArray;


/***/ }),

/***/ "./node_modules/lodash/_copyArray.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash/_copyArray.js ***!
  \*******************************************/
/***/ ((module) => {

/**
 * Copies the values of `source` to `array`.
 *
 * @private
 * @param {Array} source The array to copy values from.
 * @param {Array} [array=[]] The array to copy values to.
 * @returns {Array} Returns `array`.
 */
function copyArray(source, array) {
  var index = -1,
      length = source.length;

  array || (array = Array(length));
  while (++index < length) {
    array[index] = source[index];
  }
  return array;
}

module.exports = copyArray;


/***/ }),

/***/ "./node_modules/lodash/_copyObject.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_copyObject.js ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var assignValue = __webpack_require__(/*! ./_assignValue */ "./node_modules/lodash/_assignValue.js"),
    baseAssignValue = __webpack_require__(/*! ./_baseAssignValue */ "./node_modules/lodash/_baseAssignValue.js");

/**
 * Copies properties of `source` to `object`.
 *
 * @private
 * @param {Object} source The object to copy properties from.
 * @param {Array} props The property identifiers to copy.
 * @param {Object} [object={}] The object to copy properties to.
 * @param {Function} [customizer] The function to customize copied values.
 * @returns {Object} Returns `object`.
 */
function copyObject(source, props, object, customizer) {
  var isNew = !object;
  object || (object = {});

  var index = -1,
      length = props.length;

  while (++index < length) {
    var key = props[index];

    var newValue = customizer
      ? customizer(object[key], source[key], key, object, source)
      : undefined;

    if (newValue === undefined) {
      newValue = source[key];
    }
    if (isNew) {
      baseAssignValue(object, key, newValue);
    } else {
      assignValue(object, key, newValue);
    }
  }
  return object;
}

module.exports = copyObject;


/***/ }),

/***/ "./node_modules/lodash/_coreJsData.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_coreJsData.js ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var root = __webpack_require__(/*! ./_root */ "./node_modules/lodash/_root.js");

/** Used to detect overreaching core-js shims. */
var coreJsData = root['__core-js_shared__'];

module.exports = coreJsData;


/***/ }),

/***/ "./node_modules/lodash/_createAssigner.js":
/*!************************************************!*\
  !*** ./node_modules/lodash/_createAssigner.js ***!
  \************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseRest = __webpack_require__(/*! ./_baseRest */ "./node_modules/lodash/_baseRest.js"),
    isIterateeCall = __webpack_require__(/*! ./_isIterateeCall */ "./node_modules/lodash/_isIterateeCall.js");

/**
 * Creates a function like `_.assign`.
 *
 * @private
 * @param {Function} assigner The function to assign values.
 * @returns {Function} Returns the new assigner function.
 */
function createAssigner(assigner) {
  return baseRest(function(object, sources) {
    var index = -1,
        length = sources.length,
        customizer = length > 1 ? sources[length - 1] : undefined,
        guard = length > 2 ? sources[2] : undefined;

    customizer = (assigner.length > 3 && typeof customizer == 'function')
      ? (length--, customizer)
      : undefined;

    if (guard && isIterateeCall(sources[0], sources[1], guard)) {
      customizer = length < 3 ? undefined : customizer;
      length = 1;
    }
    object = Object(object);
    while (++index < length) {
      var source = sources[index];
      if (source) {
        assigner(object, source, index, customizer);
      }
    }
    return object;
  });
}

module.exports = createAssigner;


/***/ }),

/***/ "./node_modules/lodash/_createBaseFor.js":
/*!***********************************************!*\
  !*** ./node_modules/lodash/_createBaseFor.js ***!
  \***********************************************/
/***/ ((module) => {

/**
 * Creates a base function for methods like `_.forIn` and `_.forOwn`.
 *
 * @private
 * @param {boolean} [fromRight] Specify iterating from right to left.
 * @returns {Function} Returns the new base function.
 */
function createBaseFor(fromRight) {
  return function(object, iteratee, keysFunc) {
    var index = -1,
        iterable = Object(object),
        props = keysFunc(object),
        length = props.length;

    while (length--) {
      var key = props[fromRight ? length : ++index];
      if (iteratee(iterable[key], key, iterable) === false) {
        break;
      }
    }
    return object;
  };
}

module.exports = createBaseFor;


/***/ }),

/***/ "./node_modules/lodash/_createSet.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash/_createSet.js ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var Set = __webpack_require__(/*! ./_Set */ "./node_modules/lodash/_Set.js"),
    noop = __webpack_require__(/*! ./noop */ "./node_modules/lodash/noop.js"),
    setToArray = __webpack_require__(/*! ./_setToArray */ "./node_modules/lodash/_setToArray.js");

/** Used as references for various `Number` constants. */
var INFINITY = 1 / 0;

/**
 * Creates a set object of `values`.
 *
 * @private
 * @param {Array} values The values to add to the set.
 * @returns {Object} Returns the new set.
 */
var createSet = !(Set && (1 / setToArray(new Set([,-0]))[1]) == INFINITY) ? noop : function(values) {
  return new Set(values);
};

module.exports = createSet;


/***/ }),

/***/ "./node_modules/lodash/_defineProperty.js":
/*!************************************************!*\
  !*** ./node_modules/lodash/_defineProperty.js ***!
  \************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var getNative = __webpack_require__(/*! ./_getNative */ "./node_modules/lodash/_getNative.js");

var defineProperty = (function() {
  try {
    var func = getNative(Object, 'defineProperty');
    func({}, '', {});
    return func;
  } catch (e) {}
}());

module.exports = defineProperty;


/***/ }),

/***/ "./node_modules/lodash/_equalArrays.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash/_equalArrays.js ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var SetCache = __webpack_require__(/*! ./_SetCache */ "./node_modules/lodash/_SetCache.js"),
    arraySome = __webpack_require__(/*! ./_arraySome */ "./node_modules/lodash/_arraySome.js"),
    cacheHas = __webpack_require__(/*! ./_cacheHas */ "./node_modules/lodash/_cacheHas.js");

/** Used to compose bitmasks for value comparisons. */
var COMPARE_PARTIAL_FLAG = 1,
    COMPARE_UNORDERED_FLAG = 2;

/**
 * A specialized version of `baseIsEqualDeep` for arrays with support for
 * partial deep comparisons.
 *
 * @private
 * @param {Array} array The array to compare.
 * @param {Array} other The other array to compare.
 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
 * @param {Function} customizer The function to customize comparisons.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Object} stack Tracks traversed `array` and `other` objects.
 * @returns {boolean} Returns `true` if the arrays are equivalent, else `false`.
 */
function equalArrays(array, other, bitmask, customizer, equalFunc, stack) {
  var isPartial = bitmask & COMPARE_PARTIAL_FLAG,
      arrLength = array.length,
      othLength = other.length;

  if (arrLength != othLength && !(isPartial && othLength > arrLength)) {
    return false;
  }
  // Check that cyclic values are equal.
  var arrStacked = stack.get(array);
  var othStacked = stack.get(other);
  if (arrStacked && othStacked) {
    return arrStacked == other && othStacked == array;
  }
  var index = -1,
      result = true,
      seen = (bitmask & COMPARE_UNORDERED_FLAG) ? new SetCache : undefined;

  stack.set(array, other);
  stack.set(other, array);

  // Ignore non-index properties.
  while (++index < arrLength) {
    var arrValue = array[index],
        othValue = other[index];

    if (customizer) {
      var compared = isPartial
        ? customizer(othValue, arrValue, index, other, array, stack)
        : customizer(arrValue, othValue, index, array, other, stack);
    }
    if (compared !== undefined) {
      if (compared) {
        continue;
      }
      result = false;
      break;
    }
    // Recursively compare arrays (susceptible to call stack limits).
    if (seen) {
      if (!arraySome(other, function(othValue, othIndex) {
            if (!cacheHas(seen, othIndex) &&
                (arrValue === othValue || equalFunc(arrValue, othValue, bitmask, customizer, stack))) {
              return seen.push(othIndex);
            }
          })) {
        result = false;
        break;
      }
    } else if (!(
          arrValue === othValue ||
            equalFunc(arrValue, othValue, bitmask, customizer, stack)
        )) {
      result = false;
      break;
    }
  }
  stack['delete'](array);
  stack['delete'](other);
  return result;
}

module.exports = equalArrays;


/***/ }),

/***/ "./node_modules/lodash/_equalByTag.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_equalByTag.js ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var Symbol = __webpack_require__(/*! ./_Symbol */ "./node_modules/lodash/_Symbol.js"),
    Uint8Array = __webpack_require__(/*! ./_Uint8Array */ "./node_modules/lodash/_Uint8Array.js"),
    eq = __webpack_require__(/*! ./eq */ "./node_modules/lodash/eq.js"),
    equalArrays = __webpack_require__(/*! ./_equalArrays */ "./node_modules/lodash/_equalArrays.js"),
    mapToArray = __webpack_require__(/*! ./_mapToArray */ "./node_modules/lodash/_mapToArray.js"),
    setToArray = __webpack_require__(/*! ./_setToArray */ "./node_modules/lodash/_setToArray.js");

/** Used to compose bitmasks for value comparisons. */
var COMPARE_PARTIAL_FLAG = 1,
    COMPARE_UNORDERED_FLAG = 2;

/** `Object#toString` result references. */
var boolTag = '[object Boolean]',
    dateTag = '[object Date]',
    errorTag = '[object Error]',
    mapTag = '[object Map]',
    numberTag = '[object Number]',
    regexpTag = '[object RegExp]',
    setTag = '[object Set]',
    stringTag = '[object String]',
    symbolTag = '[object Symbol]';

var arrayBufferTag = '[object ArrayBuffer]',
    dataViewTag = '[object DataView]';

/** Used to convert symbols to primitives and strings. */
var symbolProto = Symbol ? Symbol.prototype : undefined,
    symbolValueOf = symbolProto ? symbolProto.valueOf : undefined;

/**
 * A specialized version of `baseIsEqualDeep` for comparing objects of
 * the same `toStringTag`.
 *
 * **Note:** This function only supports comparing values with tags of
 * `Boolean`, `Date`, `Error`, `Number`, `RegExp`, or `String`.
 *
 * @private
 * @param {Object} object The object to compare.
 * @param {Object} other The other object to compare.
 * @param {string} tag The `toStringTag` of the objects to compare.
 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
 * @param {Function} customizer The function to customize comparisons.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Object} stack Tracks traversed `object` and `other` objects.
 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
 */
function equalByTag(object, other, tag, bitmask, customizer, equalFunc, stack) {
  switch (tag) {
    case dataViewTag:
      if ((object.byteLength != other.byteLength) ||
          (object.byteOffset != other.byteOffset)) {
        return false;
      }
      object = object.buffer;
      other = other.buffer;

    case arrayBufferTag:
      if ((object.byteLength != other.byteLength) ||
          !equalFunc(new Uint8Array(object), new Uint8Array(other))) {
        return false;
      }
      return true;

    case boolTag:
    case dateTag:
    case numberTag:
      // Coerce booleans to `1` or `0` and dates to milliseconds.
      // Invalid dates are coerced to `NaN`.
      return eq(+object, +other);

    case errorTag:
      return object.name == other.name && object.message == other.message;

    case regexpTag:
    case stringTag:
      // Coerce regexes to strings and treat strings, primitives and objects,
      // as equal. See http://www.ecma-international.org/ecma-262/7.0/#sec-regexp.prototype.tostring
      // for more details.
      return object == (other + '');

    case mapTag:
      var convert = mapToArray;

    case setTag:
      var isPartial = bitmask & COMPARE_PARTIAL_FLAG;
      convert || (convert = setToArray);

      if (object.size != other.size && !isPartial) {
        return false;
      }
      // Assume cyclic values are equal.
      var stacked = stack.get(object);
      if (stacked) {
        return stacked == other;
      }
      bitmask |= COMPARE_UNORDERED_FLAG;

      // Recursively compare objects (susceptible to call stack limits).
      stack.set(object, other);
      var result = equalArrays(convert(object), convert(other), bitmask, customizer, equalFunc, stack);
      stack['delete'](object);
      return result;

    case symbolTag:
      if (symbolValueOf) {
        return symbolValueOf.call(object) == symbolValueOf.call(other);
      }
  }
  return false;
}

module.exports = equalByTag;


/***/ }),

/***/ "./node_modules/lodash/_equalObjects.js":
/*!**********************************************!*\
  !*** ./node_modules/lodash/_equalObjects.js ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var getAllKeys = __webpack_require__(/*! ./_getAllKeys */ "./node_modules/lodash/_getAllKeys.js");

/** Used to compose bitmasks for value comparisons. */
var COMPARE_PARTIAL_FLAG = 1;

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * A specialized version of `baseIsEqualDeep` for objects with support for
 * partial deep comparisons.
 *
 * @private
 * @param {Object} object The object to compare.
 * @param {Object} other The other object to compare.
 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
 * @param {Function} customizer The function to customize comparisons.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Object} stack Tracks traversed `object` and `other` objects.
 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
 */
function equalObjects(object, other, bitmask, customizer, equalFunc, stack) {
  var isPartial = bitmask & COMPARE_PARTIAL_FLAG,
      objProps = getAllKeys(object),
      objLength = objProps.length,
      othProps = getAllKeys(other),
      othLength = othProps.length;

  if (objLength != othLength && !isPartial) {
    return false;
  }
  var index = objLength;
  while (index--) {
    var key = objProps[index];
    if (!(isPartial ? key in other : hasOwnProperty.call(other, key))) {
      return false;
    }
  }
  // Check that cyclic values are equal.
  var objStacked = stack.get(object);
  var othStacked = stack.get(other);
  if (objStacked && othStacked) {
    return objStacked == other && othStacked == object;
  }
  var result = true;
  stack.set(object, other);
  stack.set(other, object);

  var skipCtor = isPartial;
  while (++index < objLength) {
    key = objProps[index];
    var objValue = object[key],
        othValue = other[key];

    if (customizer) {
      var compared = isPartial
        ? customizer(othValue, objValue, key, other, object, stack)
        : customizer(objValue, othValue, key, object, other, stack);
    }
    // Recursively compare objects (susceptible to call stack limits).
    if (!(compared === undefined
          ? (objValue === othValue || equalFunc(objValue, othValue, bitmask, customizer, stack))
          : compared
        )) {
      result = false;
      break;
    }
    skipCtor || (skipCtor = key == 'constructor');
  }
  if (result && !skipCtor) {
    var objCtor = object.constructor,
        othCtor = other.constructor;

    // Non `Object` object instances with different constructors are not equal.
    if (objCtor != othCtor &&
        ('constructor' in object && 'constructor' in other) &&
        !(typeof objCtor == 'function' && objCtor instanceof objCtor &&
          typeof othCtor == 'function' && othCtor instanceof othCtor)) {
      result = false;
    }
  }
  stack['delete'](object);
  stack['delete'](other);
  return result;
}

module.exports = equalObjects;


/***/ }),

/***/ "./node_modules/lodash/_freeGlobal.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_freeGlobal.js ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

/** Detect free variable `global` from Node.js. */
var freeGlobal = typeof __webpack_require__.g == 'object' && __webpack_require__.g && __webpack_require__.g.Object === Object && __webpack_require__.g;

module.exports = freeGlobal;


/***/ }),

/***/ "./node_modules/lodash/_getAllKeys.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_getAllKeys.js ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseGetAllKeys = __webpack_require__(/*! ./_baseGetAllKeys */ "./node_modules/lodash/_baseGetAllKeys.js"),
    getSymbols = __webpack_require__(/*! ./_getSymbols */ "./node_modules/lodash/_getSymbols.js"),
    keys = __webpack_require__(/*! ./keys */ "./node_modules/lodash/keys.js");

/**
 * Creates an array of own enumerable property names and symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names and symbols.
 */
function getAllKeys(object) {
  return baseGetAllKeys(object, keys, getSymbols);
}

module.exports = getAllKeys;


/***/ }),

/***/ "./node_modules/lodash/_getAllKeysIn.js":
/*!**********************************************!*\
  !*** ./node_modules/lodash/_getAllKeysIn.js ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseGetAllKeys = __webpack_require__(/*! ./_baseGetAllKeys */ "./node_modules/lodash/_baseGetAllKeys.js"),
    getSymbolsIn = __webpack_require__(/*! ./_getSymbolsIn */ "./node_modules/lodash/_getSymbolsIn.js"),
    keysIn = __webpack_require__(/*! ./keysIn */ "./node_modules/lodash/keysIn.js");

/**
 * Creates an array of own and inherited enumerable property names and
 * symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names and symbols.
 */
function getAllKeysIn(object) {
  return baseGetAllKeys(object, keysIn, getSymbolsIn);
}

module.exports = getAllKeysIn;


/***/ }),

/***/ "./node_modules/lodash/_getMapData.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_getMapData.js ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var isKeyable = __webpack_require__(/*! ./_isKeyable */ "./node_modules/lodash/_isKeyable.js");

/**
 * Gets the data for `map`.
 *
 * @private
 * @param {Object} map The map to query.
 * @param {string} key The reference key.
 * @returns {*} Returns the map data.
 */
function getMapData(map, key) {
  var data = map.__data__;
  return isKeyable(key)
    ? data[typeof key == 'string' ? 'string' : 'hash']
    : data.map;
}

module.exports = getMapData;


/***/ }),

/***/ "./node_modules/lodash/_getMatchData.js":
/*!**********************************************!*\
  !*** ./node_modules/lodash/_getMatchData.js ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var isStrictComparable = __webpack_require__(/*! ./_isStrictComparable */ "./node_modules/lodash/_isStrictComparable.js"),
    keys = __webpack_require__(/*! ./keys */ "./node_modules/lodash/keys.js");

/**
 * Gets the property names, values, and compare flags of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the match data of `object`.
 */
function getMatchData(object) {
  var result = keys(object),
      length = result.length;

  while (length--) {
    var key = result[length],
        value = object[key];

    result[length] = [key, value, isStrictComparable(value)];
  }
  return result;
}

module.exports = getMatchData;


/***/ }),

/***/ "./node_modules/lodash/_getNative.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash/_getNative.js ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseIsNative = __webpack_require__(/*! ./_baseIsNative */ "./node_modules/lodash/_baseIsNative.js"),
    getValue = __webpack_require__(/*! ./_getValue */ "./node_modules/lodash/_getValue.js");

/**
 * Gets the native function at `key` of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {string} key The key of the method to get.
 * @returns {*} Returns the function if it's native, else `undefined`.
 */
function getNative(object, key) {
  var value = getValue(object, key);
  return baseIsNative(value) ? value : undefined;
}

module.exports = getNative;


/***/ }),

/***/ "./node_modules/lodash/_getPrototype.js":
/*!**********************************************!*\
  !*** ./node_modules/lodash/_getPrototype.js ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var overArg = __webpack_require__(/*! ./_overArg */ "./node_modules/lodash/_overArg.js");

/** Built-in value references. */
var getPrototype = overArg(Object.getPrototypeOf, Object);

module.exports = getPrototype;


/***/ }),

/***/ "./node_modules/lodash/_getRawTag.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash/_getRawTag.js ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var Symbol = __webpack_require__(/*! ./_Symbol */ "./node_modules/lodash/_Symbol.js");

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString = objectProto.toString;

/** Built-in value references. */
var symToStringTag = Symbol ? Symbol.toStringTag : undefined;

/**
 * A specialized version of `baseGetTag` which ignores `Symbol.toStringTag` values.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the raw `toStringTag`.
 */
function getRawTag(value) {
  var isOwn = hasOwnProperty.call(value, symToStringTag),
      tag = value[symToStringTag];

  try {
    value[symToStringTag] = undefined;
    var unmasked = true;
  } catch (e) {}

  var result = nativeObjectToString.call(value);
  if (unmasked) {
    if (isOwn) {
      value[symToStringTag] = tag;
    } else {
      delete value[symToStringTag];
    }
  }
  return result;
}

module.exports = getRawTag;


/***/ }),

/***/ "./node_modules/lodash/_getSymbols.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_getSymbols.js ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var arrayFilter = __webpack_require__(/*! ./_arrayFilter */ "./node_modules/lodash/_arrayFilter.js"),
    stubArray = __webpack_require__(/*! ./stubArray */ "./node_modules/lodash/stubArray.js");

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Built-in value references. */
var propertyIsEnumerable = objectProto.propertyIsEnumerable;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeGetSymbols = Object.getOwnPropertySymbols;

/**
 * Creates an array of the own enumerable symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of symbols.
 */
var getSymbols = !nativeGetSymbols ? stubArray : function(object) {
  if (object == null) {
    return [];
  }
  object = Object(object);
  return arrayFilter(nativeGetSymbols(object), function(symbol) {
    return propertyIsEnumerable.call(object, symbol);
  });
};

module.exports = getSymbols;


/***/ }),

/***/ "./node_modules/lodash/_getSymbolsIn.js":
/*!**********************************************!*\
  !*** ./node_modules/lodash/_getSymbolsIn.js ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var arrayPush = __webpack_require__(/*! ./_arrayPush */ "./node_modules/lodash/_arrayPush.js"),
    getPrototype = __webpack_require__(/*! ./_getPrototype */ "./node_modules/lodash/_getPrototype.js"),
    getSymbols = __webpack_require__(/*! ./_getSymbols */ "./node_modules/lodash/_getSymbols.js"),
    stubArray = __webpack_require__(/*! ./stubArray */ "./node_modules/lodash/stubArray.js");

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeGetSymbols = Object.getOwnPropertySymbols;

/**
 * Creates an array of the own and inherited enumerable symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of symbols.
 */
var getSymbolsIn = !nativeGetSymbols ? stubArray : function(object) {
  var result = [];
  while (object) {
    arrayPush(result, getSymbols(object));
    object = getPrototype(object);
  }
  return result;
};

module.exports = getSymbolsIn;


/***/ }),

/***/ "./node_modules/lodash/_getTag.js":
/*!****************************************!*\
  !*** ./node_modules/lodash/_getTag.js ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var DataView = __webpack_require__(/*! ./_DataView */ "./node_modules/lodash/_DataView.js"),
    Map = __webpack_require__(/*! ./_Map */ "./node_modules/lodash/_Map.js"),
    Promise = __webpack_require__(/*! ./_Promise */ "./node_modules/lodash/_Promise.js"),
    Set = __webpack_require__(/*! ./_Set */ "./node_modules/lodash/_Set.js"),
    WeakMap = __webpack_require__(/*! ./_WeakMap */ "./node_modules/lodash/_WeakMap.js"),
    baseGetTag = __webpack_require__(/*! ./_baseGetTag */ "./node_modules/lodash/_baseGetTag.js"),
    toSource = __webpack_require__(/*! ./_toSource */ "./node_modules/lodash/_toSource.js");

/** `Object#toString` result references. */
var mapTag = '[object Map]',
    objectTag = '[object Object]',
    promiseTag = '[object Promise]',
    setTag = '[object Set]',
    weakMapTag = '[object WeakMap]';

var dataViewTag = '[object DataView]';

/** Used to detect maps, sets, and weakmaps. */
var dataViewCtorString = toSource(DataView),
    mapCtorString = toSource(Map),
    promiseCtorString = toSource(Promise),
    setCtorString = toSource(Set),
    weakMapCtorString = toSource(WeakMap);

/**
 * Gets the `toStringTag` of `value`.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */
var getTag = baseGetTag;

// Fallback for data views, maps, sets, and weak maps in IE 11 and promises in Node.js < 6.
if ((DataView && getTag(new DataView(new ArrayBuffer(1))) != dataViewTag) ||
    (Map && getTag(new Map) != mapTag) ||
    (Promise && getTag(Promise.resolve()) != promiseTag) ||
    (Set && getTag(new Set) != setTag) ||
    (WeakMap && getTag(new WeakMap) != weakMapTag)) {
  getTag = function(value) {
    var result = baseGetTag(value),
        Ctor = result == objectTag ? value.constructor : undefined,
        ctorString = Ctor ? toSource(Ctor) : '';

    if (ctorString) {
      switch (ctorString) {
        case dataViewCtorString: return dataViewTag;
        case mapCtorString: return mapTag;
        case promiseCtorString: return promiseTag;
        case setCtorString: return setTag;
        case weakMapCtorString: return weakMapTag;
      }
    }
    return result;
  };
}

module.exports = getTag;


/***/ }),

/***/ "./node_modules/lodash/_getValue.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/_getValue.js ***!
  \******************************************/
/***/ ((module) => {

/**
 * Gets the value at `key` of `object`.
 *
 * @private
 * @param {Object} [object] The object to query.
 * @param {string} key The key of the property to get.
 * @returns {*} Returns the property value.
 */
function getValue(object, key) {
  return object == null ? undefined : object[key];
}

module.exports = getValue;


/***/ }),

/***/ "./node_modules/lodash/_hasPath.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/_hasPath.js ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var castPath = __webpack_require__(/*! ./_castPath */ "./node_modules/lodash/_castPath.js"),
    isArguments = __webpack_require__(/*! ./isArguments */ "./node_modules/lodash/isArguments.js"),
    isArray = __webpack_require__(/*! ./isArray */ "./node_modules/lodash/isArray.js"),
    isIndex = __webpack_require__(/*! ./_isIndex */ "./node_modules/lodash/_isIndex.js"),
    isLength = __webpack_require__(/*! ./isLength */ "./node_modules/lodash/isLength.js"),
    toKey = __webpack_require__(/*! ./_toKey */ "./node_modules/lodash/_toKey.js");

/**
 * Checks if `path` exists on `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {Array|string} path The path to check.
 * @param {Function} hasFunc The function to check properties.
 * @returns {boolean} Returns `true` if `path` exists, else `false`.
 */
function hasPath(object, path, hasFunc) {
  path = castPath(path, object);

  var index = -1,
      length = path.length,
      result = false;

  while (++index < length) {
    var key = toKey(path[index]);
    if (!(result = object != null && hasFunc(object, key))) {
      break;
    }
    object = object[key];
  }
  if (result || ++index != length) {
    return result;
  }
  length = object == null ? 0 : object.length;
  return !!length && isLength(length) && isIndex(key, length) &&
    (isArray(object) || isArguments(object));
}

module.exports = hasPath;


/***/ }),

/***/ "./node_modules/lodash/_hashClear.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash/_hashClear.js ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var nativeCreate = __webpack_require__(/*! ./_nativeCreate */ "./node_modules/lodash/_nativeCreate.js");

/**
 * Removes all key-value entries from the hash.
 *
 * @private
 * @name clear
 * @memberOf Hash
 */
function hashClear() {
  this.__data__ = nativeCreate ? nativeCreate(null) : {};
  this.size = 0;
}

module.exports = hashClear;


/***/ }),

/***/ "./node_modules/lodash/_hashDelete.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_hashDelete.js ***!
  \********************************************/
/***/ ((module) => {

/**
 * Removes `key` and its value from the hash.
 *
 * @private
 * @name delete
 * @memberOf Hash
 * @param {Object} hash The hash to modify.
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function hashDelete(key) {
  var result = this.has(key) && delete this.__data__[key];
  this.size -= result ? 1 : 0;
  return result;
}

module.exports = hashDelete;


/***/ }),

/***/ "./node_modules/lodash/_hashGet.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/_hashGet.js ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var nativeCreate = __webpack_require__(/*! ./_nativeCreate */ "./node_modules/lodash/_nativeCreate.js");

/** Used to stand-in for `undefined` hash values. */
var HASH_UNDEFINED = '__lodash_hash_undefined__';

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Gets the hash value for `key`.
 *
 * @private
 * @name get
 * @memberOf Hash
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function hashGet(key) {
  var data = this.__data__;
  if (nativeCreate) {
    var result = data[key];
    return result === HASH_UNDEFINED ? undefined : result;
  }
  return hasOwnProperty.call(data, key) ? data[key] : undefined;
}

module.exports = hashGet;


/***/ }),

/***/ "./node_modules/lodash/_hashHas.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/_hashHas.js ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var nativeCreate = __webpack_require__(/*! ./_nativeCreate */ "./node_modules/lodash/_nativeCreate.js");

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Checks if a hash value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf Hash
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function hashHas(key) {
  var data = this.__data__;
  return nativeCreate ? (data[key] !== undefined) : hasOwnProperty.call(data, key);
}

module.exports = hashHas;


/***/ }),

/***/ "./node_modules/lodash/_hashSet.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/_hashSet.js ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var nativeCreate = __webpack_require__(/*! ./_nativeCreate */ "./node_modules/lodash/_nativeCreate.js");

/** Used to stand-in for `undefined` hash values. */
var HASH_UNDEFINED = '__lodash_hash_undefined__';

/**
 * Sets the hash `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf Hash
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the hash instance.
 */
function hashSet(key, value) {
  var data = this.__data__;
  this.size += this.has(key) ? 0 : 1;
  data[key] = (nativeCreate && value === undefined) ? HASH_UNDEFINED : value;
  return this;
}

module.exports = hashSet;


/***/ }),

/***/ "./node_modules/lodash/_initCloneObject.js":
/*!*************************************************!*\
  !*** ./node_modules/lodash/_initCloneObject.js ***!
  \*************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseCreate = __webpack_require__(/*! ./_baseCreate */ "./node_modules/lodash/_baseCreate.js"),
    getPrototype = __webpack_require__(/*! ./_getPrototype */ "./node_modules/lodash/_getPrototype.js"),
    isPrototype = __webpack_require__(/*! ./_isPrototype */ "./node_modules/lodash/_isPrototype.js");

/**
 * Initializes an object clone.
 *
 * @private
 * @param {Object} object The object to clone.
 * @returns {Object} Returns the initialized clone.
 */
function initCloneObject(object) {
  return (typeof object.constructor == 'function' && !isPrototype(object))
    ? baseCreate(getPrototype(object))
    : {};
}

module.exports = initCloneObject;


/***/ }),

/***/ "./node_modules/lodash/_isFlattenable.js":
/*!***********************************************!*\
  !*** ./node_modules/lodash/_isFlattenable.js ***!
  \***********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var Symbol = __webpack_require__(/*! ./_Symbol */ "./node_modules/lodash/_Symbol.js"),
    isArguments = __webpack_require__(/*! ./isArguments */ "./node_modules/lodash/isArguments.js"),
    isArray = __webpack_require__(/*! ./isArray */ "./node_modules/lodash/isArray.js");

/** Built-in value references. */
var spreadableSymbol = Symbol ? Symbol.isConcatSpreadable : undefined;

/**
 * Checks if `value` is a flattenable `arguments` object or array.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is flattenable, else `false`.
 */
function isFlattenable(value) {
  return isArray(value) || isArguments(value) ||
    !!(spreadableSymbol && value && value[spreadableSymbol]);
}

module.exports = isFlattenable;


/***/ }),

/***/ "./node_modules/lodash/_isIndex.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/_isIndex.js ***!
  \*****************************************/
/***/ ((module) => {

/** Used as references for various `Number` constants. */
var MAX_SAFE_INTEGER = 9007199254740991;

/** Used to detect unsigned integer values. */
var reIsUint = /^(?:0|[1-9]\d*)$/;

/**
 * Checks if `value` is a valid array-like index.
 *
 * @private
 * @param {*} value The value to check.
 * @param {number} [length=MAX_SAFE_INTEGER] The upper bounds of a valid index.
 * @returns {boolean} Returns `true` if `value` is a valid index, else `false`.
 */
function isIndex(value, length) {
  var type = typeof value;
  length = length == null ? MAX_SAFE_INTEGER : length;

  return !!length &&
    (type == 'number' ||
      (type != 'symbol' && reIsUint.test(value))) &&
        (value > -1 && value % 1 == 0 && value < length);
}

module.exports = isIndex;


/***/ }),

/***/ "./node_modules/lodash/_isIterateeCall.js":
/*!************************************************!*\
  !*** ./node_modules/lodash/_isIterateeCall.js ***!
  \************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var eq = __webpack_require__(/*! ./eq */ "./node_modules/lodash/eq.js"),
    isArrayLike = __webpack_require__(/*! ./isArrayLike */ "./node_modules/lodash/isArrayLike.js"),
    isIndex = __webpack_require__(/*! ./_isIndex */ "./node_modules/lodash/_isIndex.js"),
    isObject = __webpack_require__(/*! ./isObject */ "./node_modules/lodash/isObject.js");

/**
 * Checks if the given arguments are from an iteratee call.
 *
 * @private
 * @param {*} value The potential iteratee value argument.
 * @param {*} index The potential iteratee index or key argument.
 * @param {*} object The potential iteratee object argument.
 * @returns {boolean} Returns `true` if the arguments are from an iteratee call,
 *  else `false`.
 */
function isIterateeCall(value, index, object) {
  if (!isObject(object)) {
    return false;
  }
  var type = typeof index;
  if (type == 'number'
        ? (isArrayLike(object) && isIndex(index, object.length))
        : (type == 'string' && index in object)
      ) {
    return eq(object[index], value);
  }
  return false;
}

module.exports = isIterateeCall;


/***/ }),

/***/ "./node_modules/lodash/_isKey.js":
/*!***************************************!*\
  !*** ./node_modules/lodash/_isKey.js ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var isArray = __webpack_require__(/*! ./isArray */ "./node_modules/lodash/isArray.js"),
    isSymbol = __webpack_require__(/*! ./isSymbol */ "./node_modules/lodash/isSymbol.js");

/** Used to match property names within property paths. */
var reIsDeepProp = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
    reIsPlainProp = /^\w*$/;

/**
 * Checks if `value` is a property name and not a property path.
 *
 * @private
 * @param {*} value The value to check.
 * @param {Object} [object] The object to query keys on.
 * @returns {boolean} Returns `true` if `value` is a property name, else `false`.
 */
function isKey(value, object) {
  if (isArray(value)) {
    return false;
  }
  var type = typeof value;
  if (type == 'number' || type == 'symbol' || type == 'boolean' ||
      value == null || isSymbol(value)) {
    return true;
  }
  return reIsPlainProp.test(value) || !reIsDeepProp.test(value) ||
    (object != null && value in Object(object));
}

module.exports = isKey;


/***/ }),

/***/ "./node_modules/lodash/_isKeyable.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash/_isKeyable.js ***!
  \*******************************************/
/***/ ((module) => {

/**
 * Checks if `value` is suitable for use as unique object key.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is suitable, else `false`.
 */
function isKeyable(value) {
  var type = typeof value;
  return (type == 'string' || type == 'number' || type == 'symbol' || type == 'boolean')
    ? (value !== '__proto__')
    : (value === null);
}

module.exports = isKeyable;


/***/ }),

/***/ "./node_modules/lodash/_isMasked.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/_isMasked.js ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var coreJsData = __webpack_require__(/*! ./_coreJsData */ "./node_modules/lodash/_coreJsData.js");

/** Used to detect methods masquerading as native. */
var maskSrcKey = (function() {
  var uid = /[^.]+$/.exec(coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO || '');
  return uid ? ('Symbol(src)_1.' + uid) : '';
}());

/**
 * Checks if `func` has its source masked.
 *
 * @private
 * @param {Function} func The function to check.
 * @returns {boolean} Returns `true` if `func` is masked, else `false`.
 */
function isMasked(func) {
  return !!maskSrcKey && (maskSrcKey in func);
}

module.exports = isMasked;


/***/ }),

/***/ "./node_modules/lodash/_isPrototype.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash/_isPrototype.js ***!
  \*********************************************/
/***/ ((module) => {

/** Used for built-in method references. */
var objectProto = Object.prototype;

/**
 * Checks if `value` is likely a prototype object.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a prototype, else `false`.
 */
function isPrototype(value) {
  var Ctor = value && value.constructor,
      proto = (typeof Ctor == 'function' && Ctor.prototype) || objectProto;

  return value === proto;
}

module.exports = isPrototype;


/***/ }),

/***/ "./node_modules/lodash/_isStrictComparable.js":
/*!****************************************************!*\
  !*** ./node_modules/lodash/_isStrictComparable.js ***!
  \****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var isObject = __webpack_require__(/*! ./isObject */ "./node_modules/lodash/isObject.js");

/**
 * Checks if `value` is suitable for strict equality comparisons, i.e. `===`.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` if suitable for strict
 *  equality comparisons, else `false`.
 */
function isStrictComparable(value) {
  return value === value && !isObject(value);
}

module.exports = isStrictComparable;


/***/ }),

/***/ "./node_modules/lodash/_listCacheClear.js":
/*!************************************************!*\
  !*** ./node_modules/lodash/_listCacheClear.js ***!
  \************************************************/
/***/ ((module) => {

/**
 * Removes all key-value entries from the list cache.
 *
 * @private
 * @name clear
 * @memberOf ListCache
 */
function listCacheClear() {
  this.__data__ = [];
  this.size = 0;
}

module.exports = listCacheClear;


/***/ }),

/***/ "./node_modules/lodash/_listCacheDelete.js":
/*!*************************************************!*\
  !*** ./node_modules/lodash/_listCacheDelete.js ***!
  \*************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var assocIndexOf = __webpack_require__(/*! ./_assocIndexOf */ "./node_modules/lodash/_assocIndexOf.js");

/** Used for built-in method references. */
var arrayProto = Array.prototype;

/** Built-in value references. */
var splice = arrayProto.splice;

/**
 * Removes `key` and its value from the list cache.
 *
 * @private
 * @name delete
 * @memberOf ListCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function listCacheDelete(key) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  if (index < 0) {
    return false;
  }
  var lastIndex = data.length - 1;
  if (index == lastIndex) {
    data.pop();
  } else {
    splice.call(data, index, 1);
  }
  --this.size;
  return true;
}

module.exports = listCacheDelete;


/***/ }),

/***/ "./node_modules/lodash/_listCacheGet.js":
/*!**********************************************!*\
  !*** ./node_modules/lodash/_listCacheGet.js ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var assocIndexOf = __webpack_require__(/*! ./_assocIndexOf */ "./node_modules/lodash/_assocIndexOf.js");

/**
 * Gets the list cache value for `key`.
 *
 * @private
 * @name get
 * @memberOf ListCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function listCacheGet(key) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  return index < 0 ? undefined : data[index][1];
}

module.exports = listCacheGet;


/***/ }),

/***/ "./node_modules/lodash/_listCacheHas.js":
/*!**********************************************!*\
  !*** ./node_modules/lodash/_listCacheHas.js ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var assocIndexOf = __webpack_require__(/*! ./_assocIndexOf */ "./node_modules/lodash/_assocIndexOf.js");

/**
 * Checks if a list cache value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf ListCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function listCacheHas(key) {
  return assocIndexOf(this.__data__, key) > -1;
}

module.exports = listCacheHas;


/***/ }),

/***/ "./node_modules/lodash/_listCacheSet.js":
/*!**********************************************!*\
  !*** ./node_modules/lodash/_listCacheSet.js ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var assocIndexOf = __webpack_require__(/*! ./_assocIndexOf */ "./node_modules/lodash/_assocIndexOf.js");

/**
 * Sets the list cache `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf ListCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the list cache instance.
 */
function listCacheSet(key, value) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  if (index < 0) {
    ++this.size;
    data.push([key, value]);
  } else {
    data[index][1] = value;
  }
  return this;
}

module.exports = listCacheSet;


/***/ }),

/***/ "./node_modules/lodash/_mapCacheClear.js":
/*!***********************************************!*\
  !*** ./node_modules/lodash/_mapCacheClear.js ***!
  \***********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var Hash = __webpack_require__(/*! ./_Hash */ "./node_modules/lodash/_Hash.js"),
    ListCache = __webpack_require__(/*! ./_ListCache */ "./node_modules/lodash/_ListCache.js"),
    Map = __webpack_require__(/*! ./_Map */ "./node_modules/lodash/_Map.js");

/**
 * Removes all key-value entries from the map.
 *
 * @private
 * @name clear
 * @memberOf MapCache
 */
function mapCacheClear() {
  this.size = 0;
  this.__data__ = {
    'hash': new Hash,
    'map': new (Map || ListCache),
    'string': new Hash
  };
}

module.exports = mapCacheClear;


/***/ }),

/***/ "./node_modules/lodash/_mapCacheDelete.js":
/*!************************************************!*\
  !*** ./node_modules/lodash/_mapCacheDelete.js ***!
  \************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var getMapData = __webpack_require__(/*! ./_getMapData */ "./node_modules/lodash/_getMapData.js");

/**
 * Removes `key` and its value from the map.
 *
 * @private
 * @name delete
 * @memberOf MapCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function mapCacheDelete(key) {
  var result = getMapData(this, key)['delete'](key);
  this.size -= result ? 1 : 0;
  return result;
}

module.exports = mapCacheDelete;


/***/ }),

/***/ "./node_modules/lodash/_mapCacheGet.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash/_mapCacheGet.js ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var getMapData = __webpack_require__(/*! ./_getMapData */ "./node_modules/lodash/_getMapData.js");

/**
 * Gets the map value for `key`.
 *
 * @private
 * @name get
 * @memberOf MapCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function mapCacheGet(key) {
  return getMapData(this, key).get(key);
}

module.exports = mapCacheGet;


/***/ }),

/***/ "./node_modules/lodash/_mapCacheHas.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash/_mapCacheHas.js ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var getMapData = __webpack_require__(/*! ./_getMapData */ "./node_modules/lodash/_getMapData.js");

/**
 * Checks if a map value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf MapCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function mapCacheHas(key) {
  return getMapData(this, key).has(key);
}

module.exports = mapCacheHas;


/***/ }),

/***/ "./node_modules/lodash/_mapCacheSet.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash/_mapCacheSet.js ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var getMapData = __webpack_require__(/*! ./_getMapData */ "./node_modules/lodash/_getMapData.js");

/**
 * Sets the map `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf MapCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the map cache instance.
 */
function mapCacheSet(key, value) {
  var data = getMapData(this, key),
      size = data.size;

  data.set(key, value);
  this.size += data.size == size ? 0 : 1;
  return this;
}

module.exports = mapCacheSet;


/***/ }),

/***/ "./node_modules/lodash/_mapToArray.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_mapToArray.js ***!
  \********************************************/
/***/ ((module) => {

/**
 * Converts `map` to its key-value pairs.
 *
 * @private
 * @param {Object} map The map to convert.
 * @returns {Array} Returns the key-value pairs.
 */
function mapToArray(map) {
  var index = -1,
      result = Array(map.size);

  map.forEach(function(value, key) {
    result[++index] = [key, value];
  });
  return result;
}

module.exports = mapToArray;


/***/ }),

/***/ "./node_modules/lodash/_matchesStrictComparable.js":
/*!*********************************************************!*\
  !*** ./node_modules/lodash/_matchesStrictComparable.js ***!
  \*********************************************************/
/***/ ((module) => {

/**
 * A specialized version of `matchesProperty` for source values suitable
 * for strict equality comparisons, i.e. `===`.
 *
 * @private
 * @param {string} key The key of the property to get.
 * @param {*} srcValue The value to match.
 * @returns {Function} Returns the new spec function.
 */
function matchesStrictComparable(key, srcValue) {
  return function(object) {
    if (object == null) {
      return false;
    }
    return object[key] === srcValue &&
      (srcValue !== undefined || (key in Object(object)));
  };
}

module.exports = matchesStrictComparable;


/***/ }),

/***/ "./node_modules/lodash/_memoizeCapped.js":
/*!***********************************************!*\
  !*** ./node_modules/lodash/_memoizeCapped.js ***!
  \***********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var memoize = __webpack_require__(/*! ./memoize */ "./node_modules/lodash/memoize.js");

/** Used as the maximum memoize cache size. */
var MAX_MEMOIZE_SIZE = 500;

/**
 * A specialized version of `_.memoize` which clears the memoized function's
 * cache when it exceeds `MAX_MEMOIZE_SIZE`.
 *
 * @private
 * @param {Function} func The function to have its output memoized.
 * @returns {Function} Returns the new memoized function.
 */
function memoizeCapped(func) {
  var result = memoize(func, function(key) {
    if (cache.size === MAX_MEMOIZE_SIZE) {
      cache.clear();
    }
    return key;
  });

  var cache = result.cache;
  return result;
}

module.exports = memoizeCapped;


/***/ }),

/***/ "./node_modules/lodash/_nativeCreate.js":
/*!**********************************************!*\
  !*** ./node_modules/lodash/_nativeCreate.js ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var getNative = __webpack_require__(/*! ./_getNative */ "./node_modules/lodash/_getNative.js");

/* Built-in method references that are verified to be native. */
var nativeCreate = getNative(Object, 'create');

module.exports = nativeCreate;


/***/ }),

/***/ "./node_modules/lodash/_nativeKeys.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_nativeKeys.js ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var overArg = __webpack_require__(/*! ./_overArg */ "./node_modules/lodash/_overArg.js");

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeKeys = overArg(Object.keys, Object);

module.exports = nativeKeys;


/***/ }),

/***/ "./node_modules/lodash/_nativeKeysIn.js":
/*!**********************************************!*\
  !*** ./node_modules/lodash/_nativeKeysIn.js ***!
  \**********************************************/
/***/ ((module) => {

/**
 * This function is like
 * [`Object.keys`](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
 * except that it includes inherited enumerable properties.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 */
function nativeKeysIn(object) {
  var result = [];
  if (object != null) {
    for (var key in Object(object)) {
      result.push(key);
    }
  }
  return result;
}

module.exports = nativeKeysIn;


/***/ }),

/***/ "./node_modules/lodash/_nodeUtil.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/_nodeUtil.js ***!
  \******************************************/
/***/ ((module, exports, __webpack_require__) => {

/* module decorator */ module = __webpack_require__.nmd(module);
var freeGlobal = __webpack_require__(/*! ./_freeGlobal */ "./node_modules/lodash/_freeGlobal.js");

/** Detect free variable `exports`. */
var freeExports =  true && exports && !exports.nodeType && exports;

/** Detect free variable `module`. */
var freeModule = freeExports && "object" == 'object' && module && !module.nodeType && module;

/** Detect the popular CommonJS extension `module.exports`. */
var moduleExports = freeModule && freeModule.exports === freeExports;

/** Detect free variable `process` from Node.js. */
var freeProcess = moduleExports && freeGlobal.process;

/** Used to access faster Node.js helpers. */
var nodeUtil = (function() {
  try {
    // Use `util.types` for Node.js 10+.
    var types = freeModule && freeModule.require && freeModule.require('util').types;

    if (types) {
      return types;
    }

    // Legacy `process.binding('util')` for Node.js < 10.
    return freeProcess && freeProcess.binding && freeProcess.binding('util');
  } catch (e) {}
}());

module.exports = nodeUtil;


/***/ }),

/***/ "./node_modules/lodash/_objectToString.js":
/*!************************************************!*\
  !*** ./node_modules/lodash/_objectToString.js ***!
  \************************************************/
/***/ ((module) => {

/** Used for built-in method references. */
var objectProto = Object.prototype;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString = objectProto.toString;

/**
 * Converts `value` to a string using `Object.prototype.toString`.
 *
 * @private
 * @param {*} value The value to convert.
 * @returns {string} Returns the converted string.
 */
function objectToString(value) {
  return nativeObjectToString.call(value);
}

module.exports = objectToString;


/***/ }),

/***/ "./node_modules/lodash/_overArg.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/_overArg.js ***!
  \*****************************************/
/***/ ((module) => {

/**
 * Creates a unary function that invokes `func` with its argument transformed.
 *
 * @private
 * @param {Function} func The function to wrap.
 * @param {Function} transform The argument transform.
 * @returns {Function} Returns the new function.
 */
function overArg(func, transform) {
  return function(arg) {
    return func(transform(arg));
  };
}

module.exports = overArg;


/***/ }),

/***/ "./node_modules/lodash/_overRest.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/_overRest.js ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var apply = __webpack_require__(/*! ./_apply */ "./node_modules/lodash/_apply.js");

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeMax = Math.max;

/**
 * A specialized version of `baseRest` which transforms the rest array.
 *
 * @private
 * @param {Function} func The function to apply a rest parameter to.
 * @param {number} [start=func.length-1] The start position of the rest parameter.
 * @param {Function} transform The rest array transform.
 * @returns {Function} Returns the new function.
 */
function overRest(func, start, transform) {
  start = nativeMax(start === undefined ? (func.length - 1) : start, 0);
  return function() {
    var args = arguments,
        index = -1,
        length = nativeMax(args.length - start, 0),
        array = Array(length);

    while (++index < length) {
      array[index] = args[start + index];
    }
    index = -1;
    var otherArgs = Array(start + 1);
    while (++index < start) {
      otherArgs[index] = args[index];
    }
    otherArgs[start] = transform(array);
    return apply(func, this, otherArgs);
  };
}

module.exports = overRest;


/***/ }),

/***/ "./node_modules/lodash/_root.js":
/*!**************************************!*\
  !*** ./node_modules/lodash/_root.js ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var freeGlobal = __webpack_require__(/*! ./_freeGlobal */ "./node_modules/lodash/_freeGlobal.js");

/** Detect free variable `self`. */
var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

/** Used as a reference to the global object. */
var root = freeGlobal || freeSelf || Function('return this')();

module.exports = root;


/***/ }),

/***/ "./node_modules/lodash/_safeGet.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/_safeGet.js ***!
  \*****************************************/
/***/ ((module) => {

/**
 * Gets the value at `key`, unless `key` is "__proto__" or "constructor".
 *
 * @private
 * @param {Object} object The object to query.
 * @param {string} key The key of the property to get.
 * @returns {*} Returns the property value.
 */
function safeGet(object, key) {
  if (key === 'constructor' && typeof object[key] === 'function') {
    return;
  }

  if (key == '__proto__') {
    return;
  }

  return object[key];
}

module.exports = safeGet;


/***/ }),

/***/ "./node_modules/lodash/_setCacheAdd.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash/_setCacheAdd.js ***!
  \*********************************************/
/***/ ((module) => {

/** Used to stand-in for `undefined` hash values. */
var HASH_UNDEFINED = '__lodash_hash_undefined__';

/**
 * Adds `value` to the array cache.
 *
 * @private
 * @name add
 * @memberOf SetCache
 * @alias push
 * @param {*} value The value to cache.
 * @returns {Object} Returns the cache instance.
 */
function setCacheAdd(value) {
  this.__data__.set(value, HASH_UNDEFINED);
  return this;
}

module.exports = setCacheAdd;


/***/ }),

/***/ "./node_modules/lodash/_setCacheHas.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash/_setCacheHas.js ***!
  \*********************************************/
/***/ ((module) => {

/**
 * Checks if `value` is in the array cache.
 *
 * @private
 * @name has
 * @memberOf SetCache
 * @param {*} value The value to search for.
 * @returns {number} Returns `true` if `value` is found, else `false`.
 */
function setCacheHas(value) {
  return this.__data__.has(value);
}

module.exports = setCacheHas;


/***/ }),

/***/ "./node_modules/lodash/_setToArray.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_setToArray.js ***!
  \********************************************/
/***/ ((module) => {

/**
 * Converts `set` to an array of its values.
 *
 * @private
 * @param {Object} set The set to convert.
 * @returns {Array} Returns the values.
 */
function setToArray(set) {
  var index = -1,
      result = Array(set.size);

  set.forEach(function(value) {
    result[++index] = value;
  });
  return result;
}

module.exports = setToArray;


/***/ }),

/***/ "./node_modules/lodash/_setToString.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash/_setToString.js ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseSetToString = __webpack_require__(/*! ./_baseSetToString */ "./node_modules/lodash/_baseSetToString.js"),
    shortOut = __webpack_require__(/*! ./_shortOut */ "./node_modules/lodash/_shortOut.js");

/**
 * Sets the `toString` method of `func` to return `string`.
 *
 * @private
 * @param {Function} func The function to modify.
 * @param {Function} string The `toString` result.
 * @returns {Function} Returns `func`.
 */
var setToString = shortOut(baseSetToString);

module.exports = setToString;


/***/ }),

/***/ "./node_modules/lodash/_shortOut.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/_shortOut.js ***!
  \******************************************/
/***/ ((module) => {

/** Used to detect hot functions by number of calls within a span of milliseconds. */
var HOT_COUNT = 800,
    HOT_SPAN = 16;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeNow = Date.now;

/**
 * Creates a function that'll short out and invoke `identity` instead
 * of `func` when it's called `HOT_COUNT` or more times in `HOT_SPAN`
 * milliseconds.
 *
 * @private
 * @param {Function} func The function to restrict.
 * @returns {Function} Returns the new shortable function.
 */
function shortOut(func) {
  var count = 0,
      lastCalled = 0;

  return function() {
    var stamp = nativeNow(),
        remaining = HOT_SPAN - (stamp - lastCalled);

    lastCalled = stamp;
    if (remaining > 0) {
      if (++count >= HOT_COUNT) {
        return arguments[0];
      }
    } else {
      count = 0;
    }
    return func.apply(undefined, arguments);
  };
}

module.exports = shortOut;


/***/ }),

/***/ "./node_modules/lodash/_stackClear.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_stackClear.js ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var ListCache = __webpack_require__(/*! ./_ListCache */ "./node_modules/lodash/_ListCache.js");

/**
 * Removes all key-value entries from the stack.
 *
 * @private
 * @name clear
 * @memberOf Stack
 */
function stackClear() {
  this.__data__ = new ListCache;
  this.size = 0;
}

module.exports = stackClear;


/***/ }),

/***/ "./node_modules/lodash/_stackDelete.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash/_stackDelete.js ***!
  \*********************************************/
/***/ ((module) => {

/**
 * Removes `key` and its value from the stack.
 *
 * @private
 * @name delete
 * @memberOf Stack
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function stackDelete(key) {
  var data = this.__data__,
      result = data['delete'](key);

  this.size = data.size;
  return result;
}

module.exports = stackDelete;


/***/ }),

/***/ "./node_modules/lodash/_stackGet.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/_stackGet.js ***!
  \******************************************/
/***/ ((module) => {

/**
 * Gets the stack value for `key`.
 *
 * @private
 * @name get
 * @memberOf Stack
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function stackGet(key) {
  return this.__data__.get(key);
}

module.exports = stackGet;


/***/ }),

/***/ "./node_modules/lodash/_stackHas.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/_stackHas.js ***!
  \******************************************/
/***/ ((module) => {

/**
 * Checks if a stack value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf Stack
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function stackHas(key) {
  return this.__data__.has(key);
}

module.exports = stackHas;


/***/ }),

/***/ "./node_modules/lodash/_stackSet.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/_stackSet.js ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var ListCache = __webpack_require__(/*! ./_ListCache */ "./node_modules/lodash/_ListCache.js"),
    Map = __webpack_require__(/*! ./_Map */ "./node_modules/lodash/_Map.js"),
    MapCache = __webpack_require__(/*! ./_MapCache */ "./node_modules/lodash/_MapCache.js");

/** Used as the size to enable large array optimizations. */
var LARGE_ARRAY_SIZE = 200;

/**
 * Sets the stack `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf Stack
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the stack cache instance.
 */
function stackSet(key, value) {
  var data = this.__data__;
  if (data instanceof ListCache) {
    var pairs = data.__data__;
    if (!Map || (pairs.length < LARGE_ARRAY_SIZE - 1)) {
      pairs.push([key, value]);
      this.size = ++data.size;
      return this;
    }
    data = this.__data__ = new MapCache(pairs);
  }
  data.set(key, value);
  this.size = data.size;
  return this;
}

module.exports = stackSet;


/***/ }),

/***/ "./node_modules/lodash/_strictIndexOf.js":
/*!***********************************************!*\
  !*** ./node_modules/lodash/_strictIndexOf.js ***!
  \***********************************************/
/***/ ((module) => {

/**
 * A specialized version of `_.indexOf` which performs strict equality
 * comparisons of values, i.e. `===`.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {*} value The value to search for.
 * @param {number} fromIndex The index to search from.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */
function strictIndexOf(array, value, fromIndex) {
  var index = fromIndex - 1,
      length = array.length;

  while (++index < length) {
    if (array[index] === value) {
      return index;
    }
  }
  return -1;
}

module.exports = strictIndexOf;


/***/ }),

/***/ "./node_modules/lodash/_stringToPath.js":
/*!**********************************************!*\
  !*** ./node_modules/lodash/_stringToPath.js ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var memoizeCapped = __webpack_require__(/*! ./_memoizeCapped */ "./node_modules/lodash/_memoizeCapped.js");

/** Used to match property names within property paths. */
var rePropName = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g;

/** Used to match backslashes in property paths. */
var reEscapeChar = /\\(\\)?/g;

/**
 * Converts `string` to a property path array.
 *
 * @private
 * @param {string} string The string to convert.
 * @returns {Array} Returns the property path array.
 */
var stringToPath = memoizeCapped(function(string) {
  var result = [];
  if (string.charCodeAt(0) === 46 /* . */) {
    result.push('');
  }
  string.replace(rePropName, function(match, number, quote, subString) {
    result.push(quote ? subString.replace(reEscapeChar, '$1') : (number || match));
  });
  return result;
});

module.exports = stringToPath;


/***/ }),

/***/ "./node_modules/lodash/_toKey.js":
/*!***************************************!*\
  !*** ./node_modules/lodash/_toKey.js ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var isSymbol = __webpack_require__(/*! ./isSymbol */ "./node_modules/lodash/isSymbol.js");

/** Used as references for various `Number` constants. */
var INFINITY = 1 / 0;

/**
 * Converts `value` to a string key if it's not a string or symbol.
 *
 * @private
 * @param {*} value The value to inspect.
 * @returns {string|symbol} Returns the key.
 */
function toKey(value) {
  if (typeof value == 'string' || isSymbol(value)) {
    return value;
  }
  var result = (value + '');
  return (result == '0' && (1 / value) == -INFINITY) ? '-0' : result;
}

module.exports = toKey;


/***/ }),

/***/ "./node_modules/lodash/_toSource.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/_toSource.js ***!
  \******************************************/
/***/ ((module) => {

/** Used for built-in method references. */
var funcProto = Function.prototype;

/** Used to resolve the decompiled source of functions. */
var funcToString = funcProto.toString;

/**
 * Converts `func` to its source code.
 *
 * @private
 * @param {Function} func The function to convert.
 * @returns {string} Returns the source code.
 */
function toSource(func) {
  if (func != null) {
    try {
      return funcToString.call(func);
    } catch (e) {}
    try {
      return (func + '');
    } catch (e) {}
  }
  return '';
}

module.exports = toSource;


/***/ }),

/***/ "./node_modules/lodash/_trimmedEndIndex.js":
/*!*************************************************!*\
  !*** ./node_modules/lodash/_trimmedEndIndex.js ***!
  \*************************************************/
/***/ ((module) => {

/** Used to match a single whitespace character. */
var reWhitespace = /\s/;

/**
 * Used by `_.trim` and `_.trimEnd` to get the index of the last non-whitespace
 * character of `string`.
 *
 * @private
 * @param {string} string The string to inspect.
 * @returns {number} Returns the index of the last non-whitespace character.
 */
function trimmedEndIndex(string) {
  var index = string.length;

  while (index-- && reWhitespace.test(string.charAt(index))) {}
  return index;
}

module.exports = trimmedEndIndex;


/***/ }),

/***/ "./node_modules/lodash/constant.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/constant.js ***!
  \*****************************************/
/***/ ((module) => {

/**
 * Creates a function that returns `value`.
 *
 * @static
 * @memberOf _
 * @since 2.4.0
 * @category Util
 * @param {*} value The value to return from the new function.
 * @returns {Function} Returns the new constant function.
 * @example
 *
 * var objects = _.times(2, _.constant({ 'a': 1 }));
 *
 * console.log(objects);
 * // => [{ 'a': 1 }, { 'a': 1 }]
 *
 * console.log(objects[0] === objects[1]);
 * // => true
 */
function constant(value) {
  return function() {
    return value;
  };
}

module.exports = constant;


/***/ }),

/***/ "./node_modules/lodash/eq.js":
/*!***********************************!*\
  !*** ./node_modules/lodash/eq.js ***!
  \***********************************/
/***/ ((module) => {

/**
 * Performs a
 * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * comparison between two values to determine if they are equivalent.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
 * @example
 *
 * var object = { 'a': 1 };
 * var other = { 'a': 1 };
 *
 * _.eq(object, object);
 * // => true
 *
 * _.eq(object, other);
 * // => false
 *
 * _.eq('a', 'a');
 * // => true
 *
 * _.eq('a', Object('a'));
 * // => false
 *
 * _.eq(NaN, NaN);
 * // => true
 */
function eq(value, other) {
  return value === other || (value !== value && other !== other);
}

module.exports = eq;


/***/ }),

/***/ "./node_modules/lodash/findIndex.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/findIndex.js ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseFindIndex = __webpack_require__(/*! ./_baseFindIndex */ "./node_modules/lodash/_baseFindIndex.js"),
    baseIteratee = __webpack_require__(/*! ./_baseIteratee */ "./node_modules/lodash/_baseIteratee.js"),
    toInteger = __webpack_require__(/*! ./toInteger */ "./node_modules/lodash/toInteger.js");

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeMax = Math.max;

/**
 * This method is like `_.find` except that it returns the index of the first
 * element `predicate` returns truthy for instead of the element itself.
 *
 * @static
 * @memberOf _
 * @since 1.1.0
 * @category Array
 * @param {Array} array The array to inspect.
 * @param {Function} [predicate=_.identity] The function invoked per iteration.
 * @param {number} [fromIndex=0] The index to search from.
 * @returns {number} Returns the index of the found element, else `-1`.
 * @example
 *
 * var users = [
 *   { 'user': 'barney',  'active': false },
 *   { 'user': 'fred',    'active': false },
 *   { 'user': 'pebbles', 'active': true }
 * ];
 *
 * _.findIndex(users, function(o) { return o.user == 'barney'; });
 * // => 0
 *
 * // The `_.matches` iteratee shorthand.
 * _.findIndex(users, { 'user': 'fred', 'active': false });
 * // => 1
 *
 * // The `_.matchesProperty` iteratee shorthand.
 * _.findIndex(users, ['active', false]);
 * // => 0
 *
 * // The `_.property` iteratee shorthand.
 * _.findIndex(users, 'active');
 * // => 2
 */
function findIndex(array, predicate, fromIndex) {
  var length = array == null ? 0 : array.length;
  if (!length) {
    return -1;
  }
  var index = fromIndex == null ? 0 : toInteger(fromIndex);
  if (index < 0) {
    index = nativeMax(length + index, 0);
  }
  return baseFindIndex(array, baseIteratee(predicate, 3), index);
}

module.exports = findIndex;


/***/ }),

/***/ "./node_modules/lodash/get.js":
/*!************************************!*\
  !*** ./node_modules/lodash/get.js ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseGet = __webpack_require__(/*! ./_baseGet */ "./node_modules/lodash/_baseGet.js");

/**
 * Gets the value at `path` of `object`. If the resolved value is
 * `undefined`, the `defaultValue` is returned in its place.
 *
 * @static
 * @memberOf _
 * @since 3.7.0
 * @category Object
 * @param {Object} object The object to query.
 * @param {Array|string} path The path of the property to get.
 * @param {*} [defaultValue] The value returned for `undefined` resolved values.
 * @returns {*} Returns the resolved value.
 * @example
 *
 * var object = { 'a': [{ 'b': { 'c': 3 } }] };
 *
 * _.get(object, 'a[0].b.c');
 * // => 3
 *
 * _.get(object, ['a', '0', 'b', 'c']);
 * // => 3
 *
 * _.get(object, 'a.b.c', 'default');
 * // => 'default'
 */
function get(object, path, defaultValue) {
  var result = object == null ? undefined : baseGet(object, path);
  return result === undefined ? defaultValue : result;
}

module.exports = get;


/***/ }),

/***/ "./node_modules/lodash/has.js":
/*!************************************!*\
  !*** ./node_modules/lodash/has.js ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseHas = __webpack_require__(/*! ./_baseHas */ "./node_modules/lodash/_baseHas.js"),
    hasPath = __webpack_require__(/*! ./_hasPath */ "./node_modules/lodash/_hasPath.js");

/**
 * Checks if `path` is a direct property of `object`.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Object
 * @param {Object} object The object to query.
 * @param {Array|string} path The path to check.
 * @returns {boolean} Returns `true` if `path` exists, else `false`.
 * @example
 *
 * var object = { 'a': { 'b': 2 } };
 * var other = _.create({ 'a': _.create({ 'b': 2 }) });
 *
 * _.has(object, 'a');
 * // => true
 *
 * _.has(object, 'a.b');
 * // => true
 *
 * _.has(object, ['a', 'b']);
 * // => true
 *
 * _.has(other, 'a');
 * // => false
 */
function has(object, path) {
  return object != null && hasPath(object, path, baseHas);
}

module.exports = has;


/***/ }),

/***/ "./node_modules/lodash/hasIn.js":
/*!**************************************!*\
  !*** ./node_modules/lodash/hasIn.js ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseHasIn = __webpack_require__(/*! ./_baseHasIn */ "./node_modules/lodash/_baseHasIn.js"),
    hasPath = __webpack_require__(/*! ./_hasPath */ "./node_modules/lodash/_hasPath.js");

/**
 * Checks if `path` is a direct or inherited property of `object`.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Object
 * @param {Object} object The object to query.
 * @param {Array|string} path The path to check.
 * @returns {boolean} Returns `true` if `path` exists, else `false`.
 * @example
 *
 * var object = _.create({ 'a': _.create({ 'b': 2 }) });
 *
 * _.hasIn(object, 'a');
 * // => true
 *
 * _.hasIn(object, 'a.b');
 * // => true
 *
 * _.hasIn(object, ['a', 'b']);
 * // => true
 *
 * _.hasIn(object, 'b');
 * // => false
 */
function hasIn(object, path) {
  return object != null && hasPath(object, path, baseHasIn);
}

module.exports = hasIn;


/***/ }),

/***/ "./node_modules/lodash/identity.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/identity.js ***!
  \*****************************************/
/***/ ((module) => {

/**
 * This method returns the first argument it receives.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Util
 * @param {*} value Any value.
 * @returns {*} Returns `value`.
 * @example
 *
 * var object = { 'a': 1 };
 *
 * console.log(_.identity(object) === object);
 * // => true
 */
function identity(value) {
  return value;
}

module.exports = identity;


/***/ }),

/***/ "./node_modules/lodash/isArguments.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/isArguments.js ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseIsArguments = __webpack_require__(/*! ./_baseIsArguments */ "./node_modules/lodash/_baseIsArguments.js"),
    isObjectLike = __webpack_require__(/*! ./isObjectLike */ "./node_modules/lodash/isObjectLike.js");

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/** Built-in value references. */
var propertyIsEnumerable = objectProto.propertyIsEnumerable;

/**
 * Checks if `value` is likely an `arguments` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
 *  else `false`.
 * @example
 *
 * _.isArguments(function() { return arguments; }());
 * // => true
 *
 * _.isArguments([1, 2, 3]);
 * // => false
 */
var isArguments = baseIsArguments(function() { return arguments; }()) ? baseIsArguments : function(value) {
  return isObjectLike(value) && hasOwnProperty.call(value, 'callee') &&
    !propertyIsEnumerable.call(value, 'callee');
};

module.exports = isArguments;


/***/ }),

/***/ "./node_modules/lodash/isArray.js":
/*!****************************************!*\
  !*** ./node_modules/lodash/isArray.js ***!
  \****************************************/
/***/ ((module) => {

/**
 * Checks if `value` is classified as an `Array` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an array, else `false`.
 * @example
 *
 * _.isArray([1, 2, 3]);
 * // => true
 *
 * _.isArray(document.body.children);
 * // => false
 *
 * _.isArray('abc');
 * // => false
 *
 * _.isArray(_.noop);
 * // => false
 */
var isArray = Array.isArray;

module.exports = isArray;


/***/ }),

/***/ "./node_modules/lodash/isArrayLike.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/isArrayLike.js ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var isFunction = __webpack_require__(/*! ./isFunction */ "./node_modules/lodash/isFunction.js"),
    isLength = __webpack_require__(/*! ./isLength */ "./node_modules/lodash/isLength.js");

/**
 * Checks if `value` is array-like. A value is considered array-like if it's
 * not a function and has a `value.length` that's an integer greater than or
 * equal to `0` and less than or equal to `Number.MAX_SAFE_INTEGER`.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is array-like, else `false`.
 * @example
 *
 * _.isArrayLike([1, 2, 3]);
 * // => true
 *
 * _.isArrayLike(document.body.children);
 * // => true
 *
 * _.isArrayLike('abc');
 * // => true
 *
 * _.isArrayLike(_.noop);
 * // => false
 */
function isArrayLike(value) {
  return value != null && isLength(value.length) && !isFunction(value);
}

module.exports = isArrayLike;


/***/ }),

/***/ "./node_modules/lodash/isArrayLikeObject.js":
/*!**************************************************!*\
  !*** ./node_modules/lodash/isArrayLikeObject.js ***!
  \**************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var isArrayLike = __webpack_require__(/*! ./isArrayLike */ "./node_modules/lodash/isArrayLike.js"),
    isObjectLike = __webpack_require__(/*! ./isObjectLike */ "./node_modules/lodash/isObjectLike.js");

/**
 * This method is like `_.isArrayLike` except that it also checks if `value`
 * is an object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an array-like object,
 *  else `false`.
 * @example
 *
 * _.isArrayLikeObject([1, 2, 3]);
 * // => true
 *
 * _.isArrayLikeObject(document.body.children);
 * // => true
 *
 * _.isArrayLikeObject('abc');
 * // => false
 *
 * _.isArrayLikeObject(_.noop);
 * // => false
 */
function isArrayLikeObject(value) {
  return isObjectLike(value) && isArrayLike(value);
}

module.exports = isArrayLikeObject;


/***/ }),

/***/ "./node_modules/lodash/isBuffer.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/isBuffer.js ***!
  \*****************************************/
/***/ ((module, exports, __webpack_require__) => {

/* module decorator */ module = __webpack_require__.nmd(module);
var root = __webpack_require__(/*! ./_root */ "./node_modules/lodash/_root.js"),
    stubFalse = __webpack_require__(/*! ./stubFalse */ "./node_modules/lodash/stubFalse.js");

/** Detect free variable `exports`. */
var freeExports =  true && exports && !exports.nodeType && exports;

/** Detect free variable `module`. */
var freeModule = freeExports && "object" == 'object' && module && !module.nodeType && module;

/** Detect the popular CommonJS extension `module.exports`. */
var moduleExports = freeModule && freeModule.exports === freeExports;

/** Built-in value references. */
var Buffer = moduleExports ? root.Buffer : undefined;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeIsBuffer = Buffer ? Buffer.isBuffer : undefined;

/**
 * Checks if `value` is a buffer.
 *
 * @static
 * @memberOf _
 * @since 4.3.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a buffer, else `false`.
 * @example
 *
 * _.isBuffer(new Buffer(2));
 * // => true
 *
 * _.isBuffer(new Uint8Array(2));
 * // => false
 */
var isBuffer = nativeIsBuffer || stubFalse;

module.exports = isBuffer;


/***/ }),

/***/ "./node_modules/lodash/isFunction.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash/isFunction.js ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseGetTag = __webpack_require__(/*! ./_baseGetTag */ "./node_modules/lodash/_baseGetTag.js"),
    isObject = __webpack_require__(/*! ./isObject */ "./node_modules/lodash/isObject.js");

/** `Object#toString` result references. */
var asyncTag = '[object AsyncFunction]',
    funcTag = '[object Function]',
    genTag = '[object GeneratorFunction]',
    proxyTag = '[object Proxy]';

/**
 * Checks if `value` is classified as a `Function` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a function, else `false`.
 * @example
 *
 * _.isFunction(_);
 * // => true
 *
 * _.isFunction(/abc/);
 * // => false
 */
function isFunction(value) {
  if (!isObject(value)) {
    return false;
  }
  // The use of `Object#toString` avoids issues with the `typeof` operator
  // in Safari 9 which returns 'object' for typed arrays and other constructors.
  var tag = baseGetTag(value);
  return tag == funcTag || tag == genTag || tag == asyncTag || tag == proxyTag;
}

module.exports = isFunction;


/***/ }),

/***/ "./node_modules/lodash/isLength.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/isLength.js ***!
  \*****************************************/
/***/ ((module) => {

/** Used as references for various `Number` constants. */
var MAX_SAFE_INTEGER = 9007199254740991;

/**
 * Checks if `value` is a valid array-like length.
 *
 * **Note:** This method is loosely based on
 * [`ToLength`](http://ecma-international.org/ecma-262/7.0/#sec-tolength).
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
 * @example
 *
 * _.isLength(3);
 * // => true
 *
 * _.isLength(Number.MIN_VALUE);
 * // => false
 *
 * _.isLength(Infinity);
 * // => false
 *
 * _.isLength('3');
 * // => false
 */
function isLength(value) {
  return typeof value == 'number' &&
    value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
}

module.exports = isLength;


/***/ }),

/***/ "./node_modules/lodash/isObject.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/isObject.js ***!
  \*****************************************/
/***/ ((module) => {

/**
 * Checks if `value` is the
 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(_.noop);
 * // => true
 *
 * _.isObject(null);
 * // => false
 */
function isObject(value) {
  var type = typeof value;
  return value != null && (type == 'object' || type == 'function');
}

module.exports = isObject;


/***/ }),

/***/ "./node_modules/lodash/isObjectLike.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash/isObjectLike.js ***!
  \*********************************************/
/***/ ((module) => {

/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */
function isObjectLike(value) {
  return value != null && typeof value == 'object';
}

module.exports = isObjectLike;


/***/ }),

/***/ "./node_modules/lodash/isPlainObject.js":
/*!**********************************************!*\
  !*** ./node_modules/lodash/isPlainObject.js ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseGetTag = __webpack_require__(/*! ./_baseGetTag */ "./node_modules/lodash/_baseGetTag.js"),
    getPrototype = __webpack_require__(/*! ./_getPrototype */ "./node_modules/lodash/_getPrototype.js"),
    isObjectLike = __webpack_require__(/*! ./isObjectLike */ "./node_modules/lodash/isObjectLike.js");

/** `Object#toString` result references. */
var objectTag = '[object Object]';

/** Used for built-in method references. */
var funcProto = Function.prototype,
    objectProto = Object.prototype;

/** Used to resolve the decompiled source of functions. */
var funcToString = funcProto.toString;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/** Used to infer the `Object` constructor. */
var objectCtorString = funcToString.call(Object);

/**
 * Checks if `value` is a plain object, that is, an object created by the
 * `Object` constructor or one with a `[[Prototype]]` of `null`.
 *
 * @static
 * @memberOf _
 * @since 0.8.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a plain object, else `false`.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 * }
 *
 * _.isPlainObject(new Foo);
 * // => false
 *
 * _.isPlainObject([1, 2, 3]);
 * // => false
 *
 * _.isPlainObject({ 'x': 0, 'y': 0 });
 * // => true
 *
 * _.isPlainObject(Object.create(null));
 * // => true
 */
function isPlainObject(value) {
  if (!isObjectLike(value) || baseGetTag(value) != objectTag) {
    return false;
  }
  var proto = getPrototype(value);
  if (proto === null) {
    return true;
  }
  var Ctor = hasOwnProperty.call(proto, 'constructor') && proto.constructor;
  return typeof Ctor == 'function' && Ctor instanceof Ctor &&
    funcToString.call(Ctor) == objectCtorString;
}

module.exports = isPlainObject;


/***/ }),

/***/ "./node_modules/lodash/isSymbol.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/isSymbol.js ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseGetTag = __webpack_require__(/*! ./_baseGetTag */ "./node_modules/lodash/_baseGetTag.js"),
    isObjectLike = __webpack_require__(/*! ./isObjectLike */ "./node_modules/lodash/isObjectLike.js");

/** `Object#toString` result references. */
var symbolTag = '[object Symbol]';

/**
 * Checks if `value` is classified as a `Symbol` primitive or object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
 * @example
 *
 * _.isSymbol(Symbol.iterator);
 * // => true
 *
 * _.isSymbol('abc');
 * // => false
 */
function isSymbol(value) {
  return typeof value == 'symbol' ||
    (isObjectLike(value) && baseGetTag(value) == symbolTag);
}

module.exports = isSymbol;


/***/ }),

/***/ "./node_modules/lodash/isTypedArray.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash/isTypedArray.js ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseIsTypedArray = __webpack_require__(/*! ./_baseIsTypedArray */ "./node_modules/lodash/_baseIsTypedArray.js"),
    baseUnary = __webpack_require__(/*! ./_baseUnary */ "./node_modules/lodash/_baseUnary.js"),
    nodeUtil = __webpack_require__(/*! ./_nodeUtil */ "./node_modules/lodash/_nodeUtil.js");

/* Node.js helper references. */
var nodeIsTypedArray = nodeUtil && nodeUtil.isTypedArray;

/**
 * Checks if `value` is classified as a typed array.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
 * @example
 *
 * _.isTypedArray(new Uint8Array);
 * // => true
 *
 * _.isTypedArray([]);
 * // => false
 */
var isTypedArray = nodeIsTypedArray ? baseUnary(nodeIsTypedArray) : baseIsTypedArray;

module.exports = isTypedArray;


/***/ }),

/***/ "./node_modules/lodash/isUndefined.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/isUndefined.js ***!
  \********************************************/
/***/ ((module) => {

/**
 * Checks if `value` is `undefined`.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is `undefined`, else `false`.
 * @example
 *
 * _.isUndefined(void 0);
 * // => true
 *
 * _.isUndefined(null);
 * // => false
 */
function isUndefined(value) {
  return value === undefined;
}

module.exports = isUndefined;


/***/ }),

/***/ "./node_modules/lodash/keys.js":
/*!*************************************!*\
  !*** ./node_modules/lodash/keys.js ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var arrayLikeKeys = __webpack_require__(/*! ./_arrayLikeKeys */ "./node_modules/lodash/_arrayLikeKeys.js"),
    baseKeys = __webpack_require__(/*! ./_baseKeys */ "./node_modules/lodash/_baseKeys.js"),
    isArrayLike = __webpack_require__(/*! ./isArrayLike */ "./node_modules/lodash/isArrayLike.js");

/**
 * Creates an array of the own enumerable property names of `object`.
 *
 * **Note:** Non-object values are coerced to objects. See the
 * [ES spec](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
 * for more details.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Object
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 *   this.b = 2;
 * }
 *
 * Foo.prototype.c = 3;
 *
 * _.keys(new Foo);
 * // => ['a', 'b'] (iteration order is not guaranteed)
 *
 * _.keys('hi');
 * // => ['0', '1']
 */
function keys(object) {
  return isArrayLike(object) ? arrayLikeKeys(object) : baseKeys(object);
}

module.exports = keys;


/***/ }),

/***/ "./node_modules/lodash/keysIn.js":
/*!***************************************!*\
  !*** ./node_modules/lodash/keysIn.js ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var arrayLikeKeys = __webpack_require__(/*! ./_arrayLikeKeys */ "./node_modules/lodash/_arrayLikeKeys.js"),
    baseKeysIn = __webpack_require__(/*! ./_baseKeysIn */ "./node_modules/lodash/_baseKeysIn.js"),
    isArrayLike = __webpack_require__(/*! ./isArrayLike */ "./node_modules/lodash/isArrayLike.js");

/**
 * Creates an array of the own and inherited enumerable property names of `object`.
 *
 * **Note:** Non-object values are coerced to objects.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category Object
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 *   this.b = 2;
 * }
 *
 * Foo.prototype.c = 3;
 *
 * _.keysIn(new Foo);
 * // => ['a', 'b', 'c'] (iteration order is not guaranteed)
 */
function keysIn(object) {
  return isArrayLike(object) ? arrayLikeKeys(object, true) : baseKeysIn(object);
}

module.exports = keysIn;


/***/ }),

/***/ "./node_modules/lodash/memoize.js":
/*!****************************************!*\
  !*** ./node_modules/lodash/memoize.js ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var MapCache = __webpack_require__(/*! ./_MapCache */ "./node_modules/lodash/_MapCache.js");

/** Error message constants. */
var FUNC_ERROR_TEXT = 'Expected a function';

/**
 * Creates a function that memoizes the result of `func`. If `resolver` is
 * provided, it determines the cache key for storing the result based on the
 * arguments provided to the memoized function. By default, the first argument
 * provided to the memoized function is used as the map cache key. The `func`
 * is invoked with the `this` binding of the memoized function.
 *
 * **Note:** The cache is exposed as the `cache` property on the memoized
 * function. Its creation may be customized by replacing the `_.memoize.Cache`
 * constructor with one whose instances implement the
 * [`Map`](http://ecma-international.org/ecma-262/7.0/#sec-properties-of-the-map-prototype-object)
 * method interface of `clear`, `delete`, `get`, `has`, and `set`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Function
 * @param {Function} func The function to have its output memoized.
 * @param {Function} [resolver] The function to resolve the cache key.
 * @returns {Function} Returns the new memoized function.
 * @example
 *
 * var object = { 'a': 1, 'b': 2 };
 * var other = { 'c': 3, 'd': 4 };
 *
 * var values = _.memoize(_.values);
 * values(object);
 * // => [1, 2]
 *
 * values(other);
 * // => [3, 4]
 *
 * object.a = 2;
 * values(object);
 * // => [1, 2]
 *
 * // Modify the result cache.
 * values.cache.set(object, ['a', 'b']);
 * values(object);
 * // => ['a', 'b']
 *
 * // Replace `_.memoize.Cache`.
 * _.memoize.Cache = WeakMap;
 */
function memoize(func, resolver) {
  if (typeof func != 'function' || (resolver != null && typeof resolver != 'function')) {
    throw new TypeError(FUNC_ERROR_TEXT);
  }
  var memoized = function() {
    var args = arguments,
        key = resolver ? resolver.apply(this, args) : args[0],
        cache = memoized.cache;

    if (cache.has(key)) {
      return cache.get(key);
    }
    var result = func.apply(this, args);
    memoized.cache = cache.set(key, result) || cache;
    return result;
  };
  memoized.cache = new (memoize.Cache || MapCache);
  return memoized;
}

// Expose `MapCache`.
memoize.Cache = MapCache;

module.exports = memoize;


/***/ }),

/***/ "./node_modules/lodash/merge.js":
/*!**************************************!*\
  !*** ./node_modules/lodash/merge.js ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseMerge = __webpack_require__(/*! ./_baseMerge */ "./node_modules/lodash/_baseMerge.js"),
    createAssigner = __webpack_require__(/*! ./_createAssigner */ "./node_modules/lodash/_createAssigner.js");

/**
 * This method is like `_.assign` except that it recursively merges own and
 * inherited enumerable string keyed properties of source objects into the
 * destination object. Source properties that resolve to `undefined` are
 * skipped if a destination value exists. Array and plain object properties
 * are merged recursively. Other objects and value types are overridden by
 * assignment. Source objects are applied from left to right. Subsequent
 * sources overwrite property assignments of previous sources.
 *
 * **Note:** This method mutates `object`.
 *
 * @static
 * @memberOf _
 * @since 0.5.0
 * @category Object
 * @param {Object} object The destination object.
 * @param {...Object} [sources] The source objects.
 * @returns {Object} Returns `object`.
 * @example
 *
 * var object = {
 *   'a': [{ 'b': 2 }, { 'd': 4 }]
 * };
 *
 * var other = {
 *   'a': [{ 'c': 3 }, { 'e': 5 }]
 * };
 *
 * _.merge(object, other);
 * // => { 'a': [{ 'b': 2, 'c': 3 }, { 'd': 4, 'e': 5 }] }
 */
var merge = createAssigner(function(object, source, srcIndex) {
  baseMerge(object, source, srcIndex);
});

module.exports = merge;


/***/ }),

/***/ "./node_modules/lodash/noop.js":
/*!*************************************!*\
  !*** ./node_modules/lodash/noop.js ***!
  \*************************************/
/***/ ((module) => {

/**
 * This method returns `undefined`.
 *
 * @static
 * @memberOf _
 * @since 2.3.0
 * @category Util
 * @example
 *
 * _.times(2, _.noop);
 * // => [undefined, undefined]
 */
function noop() {
  // No operation performed.
}

module.exports = noop;


/***/ }),

/***/ "./node_modules/lodash/pickBy.js":
/*!***************************************!*\
  !*** ./node_modules/lodash/pickBy.js ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var arrayMap = __webpack_require__(/*! ./_arrayMap */ "./node_modules/lodash/_arrayMap.js"),
    baseIteratee = __webpack_require__(/*! ./_baseIteratee */ "./node_modules/lodash/_baseIteratee.js"),
    basePickBy = __webpack_require__(/*! ./_basePickBy */ "./node_modules/lodash/_basePickBy.js"),
    getAllKeysIn = __webpack_require__(/*! ./_getAllKeysIn */ "./node_modules/lodash/_getAllKeysIn.js");

/**
 * Creates an object composed of the `object` properties `predicate` returns
 * truthy for. The predicate is invoked with two arguments: (value, key).
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Object
 * @param {Object} object The source object.
 * @param {Function} [predicate=_.identity] The function invoked per property.
 * @returns {Object} Returns the new object.
 * @example
 *
 * var object = { 'a': 1, 'b': '2', 'c': 3 };
 *
 * _.pickBy(object, _.isNumber);
 * // => { 'a': 1, 'c': 3 }
 */
function pickBy(object, predicate) {
  if (object == null) {
    return {};
  }
  var props = arrayMap(getAllKeysIn(object), function(prop) {
    return [prop];
  });
  predicate = baseIteratee(predicate);
  return basePickBy(object, props, function(value, path) {
    return predicate(value, path[0]);
  });
}

module.exports = pickBy;


/***/ }),

/***/ "./node_modules/lodash/property.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/property.js ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseProperty = __webpack_require__(/*! ./_baseProperty */ "./node_modules/lodash/_baseProperty.js"),
    basePropertyDeep = __webpack_require__(/*! ./_basePropertyDeep */ "./node_modules/lodash/_basePropertyDeep.js"),
    isKey = __webpack_require__(/*! ./_isKey */ "./node_modules/lodash/_isKey.js"),
    toKey = __webpack_require__(/*! ./_toKey */ "./node_modules/lodash/_toKey.js");

/**
 * Creates a function that returns the value at `path` of a given object.
 *
 * @static
 * @memberOf _
 * @since 2.4.0
 * @category Util
 * @param {Array|string} path The path of the property to get.
 * @returns {Function} Returns the new accessor function.
 * @example
 *
 * var objects = [
 *   { 'a': { 'b': 2 } },
 *   { 'a': { 'b': 1 } }
 * ];
 *
 * _.map(objects, _.property('a.b'));
 * // => [2, 1]
 *
 * _.map(_.sortBy(objects, _.property(['a', 'b'])), 'a.b');
 * // => [1, 2]
 */
function property(path) {
  return isKey(path) ? baseProperty(toKey(path)) : basePropertyDeep(path);
}

module.exports = property;


/***/ }),

/***/ "./node_modules/lodash/stubArray.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/stubArray.js ***!
  \******************************************/
/***/ ((module) => {

/**
 * This method returns a new empty array.
 *
 * @static
 * @memberOf _
 * @since 4.13.0
 * @category Util
 * @returns {Array} Returns the new empty array.
 * @example
 *
 * var arrays = _.times(2, _.stubArray);
 *
 * console.log(arrays);
 * // => [[], []]
 *
 * console.log(arrays[0] === arrays[1]);
 * // => false
 */
function stubArray() {
  return [];
}

module.exports = stubArray;


/***/ }),

/***/ "./node_modules/lodash/stubFalse.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/stubFalse.js ***!
  \******************************************/
/***/ ((module) => {

/**
 * This method returns `false`.
 *
 * @static
 * @memberOf _
 * @since 4.13.0
 * @category Util
 * @returns {boolean} Returns `false`.
 * @example
 *
 * _.times(2, _.stubFalse);
 * // => [false, false]
 */
function stubFalse() {
  return false;
}

module.exports = stubFalse;


/***/ }),

/***/ "./node_modules/lodash/toFinite.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/toFinite.js ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var toNumber = __webpack_require__(/*! ./toNumber */ "./node_modules/lodash/toNumber.js");

/** Used as references for various `Number` constants. */
var INFINITY = 1 / 0,
    MAX_INTEGER = 1.7976931348623157e+308;

/**
 * Converts `value` to a finite number.
 *
 * @static
 * @memberOf _
 * @since 4.12.0
 * @category Lang
 * @param {*} value The value to convert.
 * @returns {number} Returns the converted number.
 * @example
 *
 * _.toFinite(3.2);
 * // => 3.2
 *
 * _.toFinite(Number.MIN_VALUE);
 * // => 5e-324
 *
 * _.toFinite(Infinity);
 * // => 1.7976931348623157e+308
 *
 * _.toFinite('3.2');
 * // => 3.2
 */
function toFinite(value) {
  if (!value) {
    return value === 0 ? value : 0;
  }
  value = toNumber(value);
  if (value === INFINITY || value === -INFINITY) {
    var sign = (value < 0 ? -1 : 1);
    return sign * MAX_INTEGER;
  }
  return value === value ? value : 0;
}

module.exports = toFinite;


/***/ }),

/***/ "./node_modules/lodash/toInteger.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/toInteger.js ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var toFinite = __webpack_require__(/*! ./toFinite */ "./node_modules/lodash/toFinite.js");

/**
 * Converts `value` to an integer.
 *
 * **Note:** This method is loosely based on
 * [`ToInteger`](http://www.ecma-international.org/ecma-262/7.0/#sec-tointeger).
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to convert.
 * @returns {number} Returns the converted integer.
 * @example
 *
 * _.toInteger(3.2);
 * // => 3
 *
 * _.toInteger(Number.MIN_VALUE);
 * // => 0
 *
 * _.toInteger(Infinity);
 * // => 1.7976931348623157e+308
 *
 * _.toInteger('3.2');
 * // => 3
 */
function toInteger(value) {
  var result = toFinite(value),
      remainder = result % 1;

  return result === result ? (remainder ? result - remainder : result) : 0;
}

module.exports = toInteger;


/***/ }),

/***/ "./node_modules/lodash/toNumber.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/toNumber.js ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseTrim = __webpack_require__(/*! ./_baseTrim */ "./node_modules/lodash/_baseTrim.js"),
    isObject = __webpack_require__(/*! ./isObject */ "./node_modules/lodash/isObject.js"),
    isSymbol = __webpack_require__(/*! ./isSymbol */ "./node_modules/lodash/isSymbol.js");

/** Used as references for various `Number` constants. */
var NAN = 0 / 0;

/** Used to detect bad signed hexadecimal string values. */
var reIsBadHex = /^[-+]0x[0-9a-f]+$/i;

/** Used to detect binary string values. */
var reIsBinary = /^0b[01]+$/i;

/** Used to detect octal string values. */
var reIsOctal = /^0o[0-7]+$/i;

/** Built-in method references without a dependency on `root`. */
var freeParseInt = parseInt;

/**
 * Converts `value` to a number.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to process.
 * @returns {number} Returns the number.
 * @example
 *
 * _.toNumber(3.2);
 * // => 3.2
 *
 * _.toNumber(Number.MIN_VALUE);
 * // => 5e-324
 *
 * _.toNumber(Infinity);
 * // => Infinity
 *
 * _.toNumber('3.2');
 * // => 3.2
 */
function toNumber(value) {
  if (typeof value == 'number') {
    return value;
  }
  if (isSymbol(value)) {
    return NAN;
  }
  if (isObject(value)) {
    var other = typeof value.valueOf == 'function' ? value.valueOf() : value;
    value = isObject(other) ? (other + '') : other;
  }
  if (typeof value != 'string') {
    return value === 0 ? value : +value;
  }
  value = baseTrim(value);
  var isBinary = reIsBinary.test(value);
  return (isBinary || reIsOctal.test(value))
    ? freeParseInt(value.slice(2), isBinary ? 2 : 8)
    : (reIsBadHex.test(value) ? NAN : +value);
}

module.exports = toNumber;


/***/ }),

/***/ "./node_modules/lodash/toPlainObject.js":
/*!**********************************************!*\
  !*** ./node_modules/lodash/toPlainObject.js ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var copyObject = __webpack_require__(/*! ./_copyObject */ "./node_modules/lodash/_copyObject.js"),
    keysIn = __webpack_require__(/*! ./keysIn */ "./node_modules/lodash/keysIn.js");

/**
 * Converts `value` to a plain object flattening inherited enumerable string
 * keyed properties of `value` to own properties of the plain object.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category Lang
 * @param {*} value The value to convert.
 * @returns {Object} Returns the converted plain object.
 * @example
 *
 * function Foo() {
 *   this.b = 2;
 * }
 *
 * Foo.prototype.c = 3;
 *
 * _.assign({ 'a': 1 }, new Foo);
 * // => { 'a': 1, 'b': 2 }
 *
 * _.assign({ 'a': 1 }, _.toPlainObject(new Foo));
 * // => { 'a': 1, 'b': 2, 'c': 3 }
 */
function toPlainObject(value) {
  return copyObject(value, keysIn(value));
}

module.exports = toPlainObject;


/***/ }),

/***/ "./node_modules/lodash/toString.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/toString.js ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseToString = __webpack_require__(/*! ./_baseToString */ "./node_modules/lodash/_baseToString.js");

/**
 * Converts `value` to a string. An empty string is returned for `null`
 * and `undefined` values. The sign of `-0` is preserved.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to convert.
 * @returns {string} Returns the converted string.
 * @example
 *
 * _.toString(null);
 * // => ''
 *
 * _.toString(-0);
 * // => '-0'
 *
 * _.toString([1, 2, 3]);
 * // => '1,2,3'
 */
function toString(value) {
  return value == null ? '' : baseToString(value);
}

module.exports = toString;


/***/ }),

/***/ "./node_modules/lodash/union.js":
/*!**************************************!*\
  !*** ./node_modules/lodash/union.js ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseFlatten = __webpack_require__(/*! ./_baseFlatten */ "./node_modules/lodash/_baseFlatten.js"),
    baseRest = __webpack_require__(/*! ./_baseRest */ "./node_modules/lodash/_baseRest.js"),
    baseUniq = __webpack_require__(/*! ./_baseUniq */ "./node_modules/lodash/_baseUniq.js"),
    isArrayLikeObject = __webpack_require__(/*! ./isArrayLikeObject */ "./node_modules/lodash/isArrayLikeObject.js");

/**
 * Creates an array of unique values, in order, from all given arrays using
 * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * for equality comparisons.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Array
 * @param {...Array} [arrays] The arrays to inspect.
 * @returns {Array} Returns the new array of combined values.
 * @example
 *
 * _.union([2], [1, 2]);
 * // => [2, 1]
 */
var union = baseRest(function(arrays) {
  return baseUniq(baseFlatten(arrays, 1, isArrayLikeObject, true));
});

module.exports = union;


/***/ }),

/***/ "./src/blocks/section/styles/editor.scss":
/*!***********************************************!*\
  !*** ./src/blocks/section/styles/editor.scss ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/blocks/section/styles/style.scss":
/*!**********************************************!*\
  !*** ./src/blocks/section/styles/style.scss ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./node_modules/object-assign/index.js":
/*!*********************************************!*\
  !*** ./node_modules/object-assign/index.js ***!
  \*********************************************/
/***/ ((module) => {

"use strict";
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/


/* eslint-disable no-unused-vars */
var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var hasOwnProperty = Object.prototype.hasOwnProperty;
var propIsEnumerable = Object.prototype.propertyIsEnumerable;

function toObject(val) {
	if (val === null || val === undefined) {
		throw new TypeError('Object.assign cannot be called with null or undefined');
	}

	return Object(val);
}

function shouldUseNative() {
	try {
		if (!Object.assign) {
			return false;
		}

		// Detect buggy property enumeration order in older V8 versions.

		// https://bugs.chromium.org/p/v8/issues/detail?id=4118
		var test1 = new String('abc');  // eslint-disable-line no-new-wrappers
		test1[5] = 'de';
		if (Object.getOwnPropertyNames(test1)[0] === '5') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test2 = {};
		for (var i = 0; i < 10; i++) {
			test2['_' + String.fromCharCode(i)] = i;
		}
		var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
			return test2[n];
		});
		if (order2.join('') !== '0123456789') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test3 = {};
		'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
			test3[letter] = letter;
		});
		if (Object.keys(Object.assign({}, test3)).join('') !==
				'abcdefghijklmnopqrst') {
			return false;
		}

		return true;
	} catch (err) {
		// We don't expect any of the above to throw, but better to be safe.
		return false;
	}
}

module.exports = shouldUseNative() ? Object.assign : function (target, source) {
	var from;
	var to = toObject(target);
	var symbols;

	for (var s = 1; s < arguments.length; s++) {
		from = Object(arguments[s]);

		for (var key in from) {
			if (hasOwnProperty.call(from, key)) {
				to[key] = from[key];
			}
		}

		if (getOwnPropertySymbols) {
			symbols = getOwnPropertySymbols(from);
			for (var i = 0; i < symbols.length; i++) {
				if (propIsEnumerable.call(from, symbols[i])) {
					to[symbols[i]] = from[symbols[i]];
				}
			}
		}
	}

	return to;
};


/***/ }),

/***/ "./node_modules/prop-types/checkPropTypes.js":
/*!***************************************************!*\
  !*** ./node_modules/prop-types/checkPropTypes.js ***!
  \***************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var printWarning = function() {};

if (true) {
  var ReactPropTypesSecret = __webpack_require__(/*! ./lib/ReactPropTypesSecret */ "./node_modules/prop-types/lib/ReactPropTypesSecret.js");
  var loggedTypeFailures = {};
  var has = __webpack_require__(/*! ./lib/has */ "./node_modules/prop-types/lib/has.js");

  printWarning = function(text) {
    var message = 'Warning: ' + text;
    if (typeof console !== 'undefined') {
      console.error(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) { /**/ }
  };
}

/**
 * Assert that the values match with the type specs.
 * Error messages are memorized and will only be shown once.
 *
 * @param {object} typeSpecs Map of name to a ReactPropType
 * @param {object} values Runtime values that need to be type-checked
 * @param {string} location e.g. "prop", "context", "child context"
 * @param {string} componentName Name of the component for error messages.
 * @param {?Function} getStack Returns the component stack.
 * @private
 */
function checkPropTypes(typeSpecs, values, location, componentName, getStack) {
  if (true) {
    for (var typeSpecName in typeSpecs) {
      if (has(typeSpecs, typeSpecName)) {
        var error;
        // Prop type validation may throw. In case they do, we don't want to
        // fail the render phase where it didn't fail before. So we log it.
        // After these have been cleaned up, we'll let them throw.
        try {
          // This is intentionally an invariant that gets caught. It's the same
          // behavior as without this statement except with a better message.
          if (typeof typeSpecs[typeSpecName] !== 'function') {
            var err = Error(
              (componentName || 'React class') + ': ' + location + ' type `' + typeSpecName + '` is invalid; ' +
              'it must be a function, usually from the `prop-types` package, but received `' + typeof typeSpecs[typeSpecName] + '`.' +
              'This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.'
            );
            err.name = 'Invariant Violation';
            throw err;
          }
          error = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, ReactPropTypesSecret);
        } catch (ex) {
          error = ex;
        }
        if (error && !(error instanceof Error)) {
          printWarning(
            (componentName || 'React class') + ': type specification of ' +
            location + ' `' + typeSpecName + '` is invalid; the type checker ' +
            'function must return `null` or an `Error` but returned a ' + typeof error + '. ' +
            'You may have forgotten to pass an argument to the type checker ' +
            'creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and ' +
            'shape all require an argument).'
          );
        }
        if (error instanceof Error && !(error.message in loggedTypeFailures)) {
          // Only monitor this failure once because there tends to be a lot of the
          // same error.
          loggedTypeFailures[error.message] = true;

          var stack = getStack ? getStack() : '';

          printWarning(
            'Failed ' + location + ' type: ' + error.message + (stack != null ? stack : '')
          );
        }
      }
    }
  }
}

/**
 * Resets warning cache when testing.
 *
 * @private
 */
checkPropTypes.resetWarningCache = function() {
  if (true) {
    loggedTypeFailures = {};
  }
}

module.exports = checkPropTypes;


/***/ }),

/***/ "./node_modules/prop-types/factoryWithTypeCheckers.js":
/*!************************************************************!*\
  !*** ./node_modules/prop-types/factoryWithTypeCheckers.js ***!
  \************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var ReactIs = __webpack_require__(/*! react-is */ "./node_modules/prop-types/node_modules/react-is/index.js");
var assign = __webpack_require__(/*! object-assign */ "./node_modules/object-assign/index.js");

var ReactPropTypesSecret = __webpack_require__(/*! ./lib/ReactPropTypesSecret */ "./node_modules/prop-types/lib/ReactPropTypesSecret.js");
var has = __webpack_require__(/*! ./lib/has */ "./node_modules/prop-types/lib/has.js");
var checkPropTypes = __webpack_require__(/*! ./checkPropTypes */ "./node_modules/prop-types/checkPropTypes.js");

var printWarning = function() {};

if (true) {
  printWarning = function(text) {
    var message = 'Warning: ' + text;
    if (typeof console !== 'undefined') {
      console.error(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };
}

function emptyFunctionThatReturnsNull() {
  return null;
}

module.exports = function(isValidElement, throwOnDirectAccess) {
  /* global Symbol */
  var ITERATOR_SYMBOL = typeof Symbol === 'function' && Symbol.iterator;
  var FAUX_ITERATOR_SYMBOL = '@@iterator'; // Before Symbol spec.

  /**
   * Returns the iterator method function contained on the iterable object.
   *
   * Be sure to invoke the function with the iterable as context:
   *
   *     var iteratorFn = getIteratorFn(myIterable);
   *     if (iteratorFn) {
   *       var iterator = iteratorFn.call(myIterable);
   *       ...
   *     }
   *
   * @param {?object} maybeIterable
   * @return {?function}
   */
  function getIteratorFn(maybeIterable) {
    var iteratorFn = maybeIterable && (ITERATOR_SYMBOL && maybeIterable[ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL]);
    if (typeof iteratorFn === 'function') {
      return iteratorFn;
    }
  }

  /**
   * Collection of methods that allow declaration and validation of props that are
   * supplied to React components. Example usage:
   *
   *   var Props = require('ReactPropTypes');
   *   var MyArticle = React.createClass({
   *     propTypes: {
   *       // An optional string prop named "description".
   *       description: Props.string,
   *
   *       // A required enum prop named "category".
   *       category: Props.oneOf(['News','Photos']).isRequired,
   *
   *       // A prop named "dialog" that requires an instance of Dialog.
   *       dialog: Props.instanceOf(Dialog).isRequired
   *     },
   *     render: function() { ... }
   *   });
   *
   * A more formal specification of how these methods are used:
   *
   *   type := array|bool|func|object|number|string|oneOf([...])|instanceOf(...)
   *   decl := ReactPropTypes.{type}(.isRequired)?
   *
   * Each and every declaration produces a function with the same signature. This
   * allows the creation of custom validation functions. For example:
   *
   *  var MyLink = React.createClass({
   *    propTypes: {
   *      // An optional string or URI prop named "href".
   *      href: function(props, propName, componentName) {
   *        var propValue = props[propName];
   *        if (propValue != null && typeof propValue !== 'string' &&
   *            !(propValue instanceof URI)) {
   *          return new Error(
   *            'Expected a string or an URI for ' + propName + ' in ' +
   *            componentName
   *          );
   *        }
   *      }
   *    },
   *    render: function() {...}
   *  });
   *
   * @internal
   */

  var ANONYMOUS = '<<anonymous>>';

  // Important!
  // Keep this list in sync with production version in `./factoryWithThrowingShims.js`.
  var ReactPropTypes = {
    array: createPrimitiveTypeChecker('array'),
    bigint: createPrimitiveTypeChecker('bigint'),
    bool: createPrimitiveTypeChecker('boolean'),
    func: createPrimitiveTypeChecker('function'),
    number: createPrimitiveTypeChecker('number'),
    object: createPrimitiveTypeChecker('object'),
    string: createPrimitiveTypeChecker('string'),
    symbol: createPrimitiveTypeChecker('symbol'),

    any: createAnyTypeChecker(),
    arrayOf: createArrayOfTypeChecker,
    element: createElementTypeChecker(),
    elementType: createElementTypeTypeChecker(),
    instanceOf: createInstanceTypeChecker,
    node: createNodeChecker(),
    objectOf: createObjectOfTypeChecker,
    oneOf: createEnumTypeChecker,
    oneOfType: createUnionTypeChecker,
    shape: createShapeTypeChecker,
    exact: createStrictShapeTypeChecker,
  };

  /**
   * inlined Object.is polyfill to avoid requiring consumers ship their own
   * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
   */
  /*eslint-disable no-self-compare*/
  function is(x, y) {
    // SameValue algorithm
    if (x === y) {
      // Steps 1-5, 7-10
      // Steps 6.b-6.e: +0 != -0
      return x !== 0 || 1 / x === 1 / y;
    } else {
      // Step 6.a: NaN == NaN
      return x !== x && y !== y;
    }
  }
  /*eslint-enable no-self-compare*/

  /**
   * We use an Error-like object for backward compatibility as people may call
   * PropTypes directly and inspect their output. However, we don't use real
   * Errors anymore. We don't inspect their stack anyway, and creating them
   * is prohibitively expensive if they are created too often, such as what
   * happens in oneOfType() for any type before the one that matched.
   */
  function PropTypeError(message, data) {
    this.message = message;
    this.data = data && typeof data === 'object' ? data: {};
    this.stack = '';
  }
  // Make `instanceof Error` still work for returned errors.
  PropTypeError.prototype = Error.prototype;

  function createChainableTypeChecker(validate) {
    if (true) {
      var manualPropTypeCallCache = {};
      var manualPropTypeWarningCount = 0;
    }
    function checkType(isRequired, props, propName, componentName, location, propFullName, secret) {
      componentName = componentName || ANONYMOUS;
      propFullName = propFullName || propName;

      if (secret !== ReactPropTypesSecret) {
        if (throwOnDirectAccess) {
          // New behavior only for users of `prop-types` package
          var err = new Error(
            'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
            'Use `PropTypes.checkPropTypes()` to call them. ' +
            'Read more at http://fb.me/use-check-prop-types'
          );
          err.name = 'Invariant Violation';
          throw err;
        } else if ( true && typeof console !== 'undefined') {
          // Old behavior for people using React.PropTypes
          var cacheKey = componentName + ':' + propName;
          if (
            !manualPropTypeCallCache[cacheKey] &&
            // Avoid spamming the console because they are often not actionable except for lib authors
            manualPropTypeWarningCount < 3
          ) {
            printWarning(
              'You are manually calling a React.PropTypes validation ' +
              'function for the `' + propFullName + '` prop on `' + componentName + '`. This is deprecated ' +
              'and will throw in the standalone `prop-types` package. ' +
              'You may be seeing this warning due to a third-party PropTypes ' +
              'library. See https://fb.me/react-warning-dont-call-proptypes ' + 'for details.'
            );
            manualPropTypeCallCache[cacheKey] = true;
            manualPropTypeWarningCount++;
          }
        }
      }
      if (props[propName] == null) {
        if (isRequired) {
          if (props[propName] === null) {
            return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required ' + ('in `' + componentName + '`, but its value is `null`.'));
          }
          return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required in ' + ('`' + componentName + '`, but its value is `undefined`.'));
        }
        return null;
      } else {
        return validate(props, propName, componentName, location, propFullName);
      }
    }

    var chainedCheckType = checkType.bind(null, false);
    chainedCheckType.isRequired = checkType.bind(null, true);

    return chainedCheckType;
  }

  function createPrimitiveTypeChecker(expectedType) {
    function validate(props, propName, componentName, location, propFullName, secret) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== expectedType) {
        // `propValue` being instance of, say, date/regexp, pass the 'object'
        // check, but we can offer a more precise error message here rather than
        // 'of type `object`'.
        var preciseType = getPreciseType(propValue);

        return new PropTypeError(
          'Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + preciseType + '` supplied to `' + componentName + '`, expected ') + ('`' + expectedType + '`.'),
          {expectedType: expectedType}
        );
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createAnyTypeChecker() {
    return createChainableTypeChecker(emptyFunctionThatReturnsNull);
  }

  function createArrayOfTypeChecker(typeChecker) {
    function validate(props, propName, componentName, location, propFullName) {
      if (typeof typeChecker !== 'function') {
        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside arrayOf.');
      }
      var propValue = props[propName];
      if (!Array.isArray(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an array.'));
      }
      for (var i = 0; i < propValue.length; i++) {
        var error = typeChecker(propValue, i, componentName, location, propFullName + '[' + i + ']', ReactPropTypesSecret);
        if (error instanceof Error) {
          return error;
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createElementTypeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      if (!isValidElement(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createElementTypeTypeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      if (!ReactIs.isValidElementType(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement type.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createInstanceTypeChecker(expectedClass) {
    function validate(props, propName, componentName, location, propFullName) {
      if (!(props[propName] instanceof expectedClass)) {
        var expectedClassName = expectedClass.name || ANONYMOUS;
        var actualClassName = getClassName(props[propName]);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + actualClassName + '` supplied to `' + componentName + '`, expected ') + ('instance of `' + expectedClassName + '`.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createEnumTypeChecker(expectedValues) {
    if (!Array.isArray(expectedValues)) {
      if (true) {
        if (arguments.length > 1) {
          printWarning(
            'Invalid arguments supplied to oneOf, expected an array, got ' + arguments.length + ' arguments. ' +
            'A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z]).'
          );
        } else {
          printWarning('Invalid argument supplied to oneOf, expected an array.');
        }
      }
      return emptyFunctionThatReturnsNull;
    }

    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      for (var i = 0; i < expectedValues.length; i++) {
        if (is(propValue, expectedValues[i])) {
          return null;
        }
      }

      var valuesString = JSON.stringify(expectedValues, function replacer(key, value) {
        var type = getPreciseType(value);
        if (type === 'symbol') {
          return String(value);
        }
        return value;
      });
      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of value `' + String(propValue) + '` ' + ('supplied to `' + componentName + '`, expected one of ' + valuesString + '.'));
    }
    return createChainableTypeChecker(validate);
  }

  function createObjectOfTypeChecker(typeChecker) {
    function validate(props, propName, componentName, location, propFullName) {
      if (typeof typeChecker !== 'function') {
        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside objectOf.');
      }
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an object.'));
      }
      for (var key in propValue) {
        if (has(propValue, key)) {
          var error = typeChecker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
          if (error instanceof Error) {
            return error;
          }
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createUnionTypeChecker(arrayOfTypeCheckers) {
    if (!Array.isArray(arrayOfTypeCheckers)) {
       true ? printWarning('Invalid argument supplied to oneOfType, expected an instance of array.') : 0;
      return emptyFunctionThatReturnsNull;
    }

    for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
      var checker = arrayOfTypeCheckers[i];
      if (typeof checker !== 'function') {
        printWarning(
          'Invalid argument supplied to oneOfType. Expected an array of check functions, but ' +
          'received ' + getPostfixForTypeWarning(checker) + ' at index ' + i + '.'
        );
        return emptyFunctionThatReturnsNull;
      }
    }

    function validate(props, propName, componentName, location, propFullName) {
      var expectedTypes = [];
      for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
        var checker = arrayOfTypeCheckers[i];
        var checkerResult = checker(props, propName, componentName, location, propFullName, ReactPropTypesSecret);
        if (checkerResult == null) {
          return null;
        }
        if (checkerResult.data && has(checkerResult.data, 'expectedType')) {
          expectedTypes.push(checkerResult.data.expectedType);
        }
      }
      var expectedTypesMessage = (expectedTypes.length > 0) ? ', expected one of type [' + expectedTypes.join(', ') + ']': '';
      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`' + expectedTypesMessage + '.'));
    }
    return createChainableTypeChecker(validate);
  }

  function createNodeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      if (!isNode(props[propName])) {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`, expected a ReactNode.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function invalidValidatorError(componentName, location, propFullName, key, type) {
    return new PropTypeError(
      (componentName || 'React class') + ': ' + location + ' type `' + propFullName + '.' + key + '` is invalid; ' +
      'it must be a function, usually from the `prop-types` package, but received `' + type + '`.'
    );
  }

  function createShapeTypeChecker(shapeTypes) {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
      }
      for (var key in shapeTypes) {
        var checker = shapeTypes[key];
        if (typeof checker !== 'function') {
          return invalidValidatorError(componentName, location, propFullName, key, getPreciseType(checker));
        }
        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
        if (error) {
          return error;
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createStrictShapeTypeChecker(shapeTypes) {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
      }
      // We need to check all keys in case some are required but missing from props.
      var allKeys = assign({}, props[propName], shapeTypes);
      for (var key in allKeys) {
        var checker = shapeTypes[key];
        if (has(shapeTypes, key) && typeof checker !== 'function') {
          return invalidValidatorError(componentName, location, propFullName, key, getPreciseType(checker));
        }
        if (!checker) {
          return new PropTypeError(
            'Invalid ' + location + ' `' + propFullName + '` key `' + key + '` supplied to `' + componentName + '`.' +
            '\nBad object: ' + JSON.stringify(props[propName], null, '  ') +
            '\nValid keys: ' + JSON.stringify(Object.keys(shapeTypes), null, '  ')
          );
        }
        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
        if (error) {
          return error;
        }
      }
      return null;
    }

    return createChainableTypeChecker(validate);
  }

  function isNode(propValue) {
    switch (typeof propValue) {
      case 'number':
      case 'string':
      case 'undefined':
        return true;
      case 'boolean':
        return !propValue;
      case 'object':
        if (Array.isArray(propValue)) {
          return propValue.every(isNode);
        }
        if (propValue === null || isValidElement(propValue)) {
          return true;
        }

        var iteratorFn = getIteratorFn(propValue);
        if (iteratorFn) {
          var iterator = iteratorFn.call(propValue);
          var step;
          if (iteratorFn !== propValue.entries) {
            while (!(step = iterator.next()).done) {
              if (!isNode(step.value)) {
                return false;
              }
            }
          } else {
            // Iterator will provide entry [k,v] tuples rather than values.
            while (!(step = iterator.next()).done) {
              var entry = step.value;
              if (entry) {
                if (!isNode(entry[1])) {
                  return false;
                }
              }
            }
          }
        } else {
          return false;
        }

        return true;
      default:
        return false;
    }
  }

  function isSymbol(propType, propValue) {
    // Native Symbol.
    if (propType === 'symbol') {
      return true;
    }

    // falsy value can't be a Symbol
    if (!propValue) {
      return false;
    }

    // 19.4.3.5 Symbol.prototype[@@toStringTag] === 'Symbol'
    if (propValue['@@toStringTag'] === 'Symbol') {
      return true;
    }

    // Fallback for non-spec compliant Symbols which are polyfilled.
    if (typeof Symbol === 'function' && propValue instanceof Symbol) {
      return true;
    }

    return false;
  }

  // Equivalent of `typeof` but with special handling for array and regexp.
  function getPropType(propValue) {
    var propType = typeof propValue;
    if (Array.isArray(propValue)) {
      return 'array';
    }
    if (propValue instanceof RegExp) {
      // Old webkits (at least until Android 4.0) return 'function' rather than
      // 'object' for typeof a RegExp. We'll normalize this here so that /bla/
      // passes PropTypes.object.
      return 'object';
    }
    if (isSymbol(propType, propValue)) {
      return 'symbol';
    }
    return propType;
  }

  // This handles more types than `getPropType`. Only used for error messages.
  // See `createPrimitiveTypeChecker`.
  function getPreciseType(propValue) {
    if (typeof propValue === 'undefined' || propValue === null) {
      return '' + propValue;
    }
    var propType = getPropType(propValue);
    if (propType === 'object') {
      if (propValue instanceof Date) {
        return 'date';
      } else if (propValue instanceof RegExp) {
        return 'regexp';
      }
    }
    return propType;
  }

  // Returns a string that is postfixed to a warning about an invalid type.
  // For example, "undefined" or "of type array"
  function getPostfixForTypeWarning(value) {
    var type = getPreciseType(value);
    switch (type) {
      case 'array':
      case 'object':
        return 'an ' + type;
      case 'boolean':
      case 'date':
      case 'regexp':
        return 'a ' + type;
      default:
        return type;
    }
  }

  // Returns class name of the object, if any.
  function getClassName(propValue) {
    if (!propValue.constructor || !propValue.constructor.name) {
      return ANONYMOUS;
    }
    return propValue.constructor.name;
  }

  ReactPropTypes.checkPropTypes = checkPropTypes;
  ReactPropTypes.resetWarningCache = checkPropTypes.resetWarningCache;
  ReactPropTypes.PropTypes = ReactPropTypes;

  return ReactPropTypes;
};


/***/ }),

/***/ "./node_modules/prop-types/index.js":
/*!******************************************!*\
  !*** ./node_modules/prop-types/index.js ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

if (true) {
  var ReactIs = __webpack_require__(/*! react-is */ "./node_modules/prop-types/node_modules/react-is/index.js");

  // By explicitly using `prop-types` you are opting into new development behavior.
  // http://fb.me/prop-types-in-prod
  var throwOnDirectAccess = true;
  module.exports = __webpack_require__(/*! ./factoryWithTypeCheckers */ "./node_modules/prop-types/factoryWithTypeCheckers.js")(ReactIs.isElement, throwOnDirectAccess);
} else {}


/***/ }),

/***/ "./node_modules/prop-types/lib/ReactPropTypesSecret.js":
/*!*************************************************************!*\
  !*** ./node_modules/prop-types/lib/ReactPropTypesSecret.js ***!
  \*************************************************************/
/***/ ((module) => {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';

module.exports = ReactPropTypesSecret;


/***/ }),

/***/ "./node_modules/prop-types/lib/has.js":
/*!********************************************!*\
  !*** ./node_modules/prop-types/lib/has.js ***!
  \********************************************/
/***/ ((module) => {

module.exports = Function.call.bind(Object.prototype.hasOwnProperty);


/***/ }),

/***/ "./node_modules/prop-types/node_modules/react-is/cjs/react-is.development.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/prop-types/node_modules/react-is/cjs/react-is.development.js ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";
/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */





if (true) {
  (function() {
'use strict';

// The Symbol used to tag the ReactElement-like types. If there is no native Symbol
// nor polyfill, then a plain number is used for performance.
var hasSymbol = typeof Symbol === 'function' && Symbol.for;
var REACT_ELEMENT_TYPE = hasSymbol ? Symbol.for('react.element') : 0xeac7;
var REACT_PORTAL_TYPE = hasSymbol ? Symbol.for('react.portal') : 0xeaca;
var REACT_FRAGMENT_TYPE = hasSymbol ? Symbol.for('react.fragment') : 0xeacb;
var REACT_STRICT_MODE_TYPE = hasSymbol ? Symbol.for('react.strict_mode') : 0xeacc;
var REACT_PROFILER_TYPE = hasSymbol ? Symbol.for('react.profiler') : 0xead2;
var REACT_PROVIDER_TYPE = hasSymbol ? Symbol.for('react.provider') : 0xeacd;
var REACT_CONTEXT_TYPE = hasSymbol ? Symbol.for('react.context') : 0xeace; // TODO: We don't use AsyncMode or ConcurrentMode anymore. They were temporary
// (unstable) APIs that have been removed. Can we remove the symbols?

var REACT_ASYNC_MODE_TYPE = hasSymbol ? Symbol.for('react.async_mode') : 0xeacf;
var REACT_CONCURRENT_MODE_TYPE = hasSymbol ? Symbol.for('react.concurrent_mode') : 0xeacf;
var REACT_FORWARD_REF_TYPE = hasSymbol ? Symbol.for('react.forward_ref') : 0xead0;
var REACT_SUSPENSE_TYPE = hasSymbol ? Symbol.for('react.suspense') : 0xead1;
var REACT_SUSPENSE_LIST_TYPE = hasSymbol ? Symbol.for('react.suspense_list') : 0xead8;
var REACT_MEMO_TYPE = hasSymbol ? Symbol.for('react.memo') : 0xead3;
var REACT_LAZY_TYPE = hasSymbol ? Symbol.for('react.lazy') : 0xead4;
var REACT_BLOCK_TYPE = hasSymbol ? Symbol.for('react.block') : 0xead9;
var REACT_FUNDAMENTAL_TYPE = hasSymbol ? Symbol.for('react.fundamental') : 0xead5;
var REACT_RESPONDER_TYPE = hasSymbol ? Symbol.for('react.responder') : 0xead6;
var REACT_SCOPE_TYPE = hasSymbol ? Symbol.for('react.scope') : 0xead7;

function isValidElementType(type) {
  return typeof type === 'string' || typeof type === 'function' || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
  type === REACT_FRAGMENT_TYPE || type === REACT_CONCURRENT_MODE_TYPE || type === REACT_PROFILER_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || typeof type === 'object' && type !== null && (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || type.$$typeof === REACT_FUNDAMENTAL_TYPE || type.$$typeof === REACT_RESPONDER_TYPE || type.$$typeof === REACT_SCOPE_TYPE || type.$$typeof === REACT_BLOCK_TYPE);
}

function typeOf(object) {
  if (typeof object === 'object' && object !== null) {
    var $$typeof = object.$$typeof;

    switch ($$typeof) {
      case REACT_ELEMENT_TYPE:
        var type = object.type;

        switch (type) {
          case REACT_ASYNC_MODE_TYPE:
          case REACT_CONCURRENT_MODE_TYPE:
          case REACT_FRAGMENT_TYPE:
          case REACT_PROFILER_TYPE:
          case REACT_STRICT_MODE_TYPE:
          case REACT_SUSPENSE_TYPE:
            return type;

          default:
            var $$typeofType = type && type.$$typeof;

            switch ($$typeofType) {
              case REACT_CONTEXT_TYPE:
              case REACT_FORWARD_REF_TYPE:
              case REACT_LAZY_TYPE:
              case REACT_MEMO_TYPE:
              case REACT_PROVIDER_TYPE:
                return $$typeofType;

              default:
                return $$typeof;
            }

        }

      case REACT_PORTAL_TYPE:
        return $$typeof;
    }
  }

  return undefined;
} // AsyncMode is deprecated along with isAsyncMode

var AsyncMode = REACT_ASYNC_MODE_TYPE;
var ConcurrentMode = REACT_CONCURRENT_MODE_TYPE;
var ContextConsumer = REACT_CONTEXT_TYPE;
var ContextProvider = REACT_PROVIDER_TYPE;
var Element = REACT_ELEMENT_TYPE;
var ForwardRef = REACT_FORWARD_REF_TYPE;
var Fragment = REACT_FRAGMENT_TYPE;
var Lazy = REACT_LAZY_TYPE;
var Memo = REACT_MEMO_TYPE;
var Portal = REACT_PORTAL_TYPE;
var Profiler = REACT_PROFILER_TYPE;
var StrictMode = REACT_STRICT_MODE_TYPE;
var Suspense = REACT_SUSPENSE_TYPE;
var hasWarnedAboutDeprecatedIsAsyncMode = false; // AsyncMode should be deprecated

function isAsyncMode(object) {
  {
    if (!hasWarnedAboutDeprecatedIsAsyncMode) {
      hasWarnedAboutDeprecatedIsAsyncMode = true; // Using console['warn'] to evade Babel and ESLint

      console['warn']('The ReactIs.isAsyncMode() alias has been deprecated, ' + 'and will be removed in React 17+. Update your code to use ' + 'ReactIs.isConcurrentMode() instead. It has the exact same API.');
    }
  }

  return isConcurrentMode(object) || typeOf(object) === REACT_ASYNC_MODE_TYPE;
}
function isConcurrentMode(object) {
  return typeOf(object) === REACT_CONCURRENT_MODE_TYPE;
}
function isContextConsumer(object) {
  return typeOf(object) === REACT_CONTEXT_TYPE;
}
function isContextProvider(object) {
  return typeOf(object) === REACT_PROVIDER_TYPE;
}
function isElement(object) {
  return typeof object === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
}
function isForwardRef(object) {
  return typeOf(object) === REACT_FORWARD_REF_TYPE;
}
function isFragment(object) {
  return typeOf(object) === REACT_FRAGMENT_TYPE;
}
function isLazy(object) {
  return typeOf(object) === REACT_LAZY_TYPE;
}
function isMemo(object) {
  return typeOf(object) === REACT_MEMO_TYPE;
}
function isPortal(object) {
  return typeOf(object) === REACT_PORTAL_TYPE;
}
function isProfiler(object) {
  return typeOf(object) === REACT_PROFILER_TYPE;
}
function isStrictMode(object) {
  return typeOf(object) === REACT_STRICT_MODE_TYPE;
}
function isSuspense(object) {
  return typeOf(object) === REACT_SUSPENSE_TYPE;
}

exports.AsyncMode = AsyncMode;
exports.ConcurrentMode = ConcurrentMode;
exports.ContextConsumer = ContextConsumer;
exports.ContextProvider = ContextProvider;
exports.Element = Element;
exports.ForwardRef = ForwardRef;
exports.Fragment = Fragment;
exports.Lazy = Lazy;
exports.Memo = Memo;
exports.Portal = Portal;
exports.Profiler = Profiler;
exports.StrictMode = StrictMode;
exports.Suspense = Suspense;
exports.isAsyncMode = isAsyncMode;
exports.isConcurrentMode = isConcurrentMode;
exports.isContextConsumer = isContextConsumer;
exports.isContextProvider = isContextProvider;
exports.isElement = isElement;
exports.isForwardRef = isForwardRef;
exports.isFragment = isFragment;
exports.isLazy = isLazy;
exports.isMemo = isMemo;
exports.isPortal = isPortal;
exports.isProfiler = isProfiler;
exports.isStrictMode = isStrictMode;
exports.isSuspense = isSuspense;
exports.isValidElementType = isValidElementType;
exports.typeOf = typeOf;
  })();
}


/***/ }),

/***/ "./node_modules/prop-types/node_modules/react-is/index.js":
/*!****************************************************************!*\
  !*** ./node_modules/prop-types/node_modules/react-is/index.js ***!
  \****************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


if (false) {} else {
  module.exports = __webpack_require__(/*! ./cjs/react-is.development.js */ "./node_modules/prop-types/node_modules/react-is/cjs/react-is.development.js");
}


/***/ }),

/***/ "./node_modules/react-responsive-masonry/es/Masonry/index.js":
/*!*******************************************************************!*\
  !*** ./node_modules/react-responsive-masonry/es/Masonry/index.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }




var Masonry = /*#__PURE__*/function (_React$Component) {
  _inheritsLoose(Masonry, _React$Component);

  function Masonry() {
    return _React$Component.apply(this, arguments) || this;
  }

  var _proto = Masonry.prototype;

  _proto.getColumns = function getColumns() {
    var _this$props = this.props,
        children = _this$props.children,
        columnsCount = _this$props.columnsCount;
    var columns = Array.from({
      length: columnsCount
    }, function () {
      return [];
    });
    react__WEBPACK_IMPORTED_MODULE_0___default().Children.forEach(children, function (child, index) {
      if (child && react__WEBPACK_IMPORTED_MODULE_0___default().isValidElement(child)) {
        columns[index % columnsCount].push(child);
      }
    });
    return columns;
  };

  _proto.renderColumns = function renderColumns() {
    var gutter = this.props.gutter;
    return this.getColumns().map(function (column, i) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
        key: i,
        style: {
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-start",
          alignContent: "stretch",
          flex: 1,
          width: 0,
          gap: gutter
        }
      }, column.map(function (item) {
        return item;
      }));
    });
  };

  _proto.render = function render() {
    var _this$props2 = this.props,
        gutter = _this$props2.gutter,
        className = _this$props2.className,
        style = _this$props2.style;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      style: _extends({
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignContent: "stretch",
        boxSizing: "border-box",
        width: "100%",
        gap: gutter
      }, style),
      className: className
    }, this.renderColumns());
  };

  return Masonry;
}((react__WEBPACK_IMPORTED_MODULE_0___default().Component));

Masonry.propTypes =  true ? {
  children: prop_types__WEBPACK_IMPORTED_MODULE_1___default().oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_1___default().arrayOf((prop_types__WEBPACK_IMPORTED_MODULE_1___default().node)), (prop_types__WEBPACK_IMPORTED_MODULE_1___default().node)]).isRequired,
  columnsCount: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().number),
  gutter: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string),
  className: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string),
  style: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().object)
} : 0;
Masonry.defaultProps = {
  columnsCount: 3,
  gutter: "0",
  className: null,
  style: {}
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Masonry);

/***/ }),

/***/ "./node_modules/react-responsive-masonry/es/ResponsiveMasonry/index.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/react-responsive-masonry/es/ResponsiveMasonry/index.js ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


var DEFAULT_COLUMNS_COUNT = 1;
var useIsomorphicLayoutEffect = typeof window !== "undefined" ? react__WEBPACK_IMPORTED_MODULE_0__.useLayoutEffect : react__WEBPACK_IMPORTED_MODULE_0__.useEffect;

var useHasMounted = function useHasMounted() {
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
      hasMounted = _useState[0],
      setHasMounted = _useState[1];

  useIsomorphicLayoutEffect(function () {
    setHasMounted(true);
  }, []);
  return hasMounted;
};

var useWindowWidth = function useWindowWidth() {
  var hasMounted = useHasMounted();

  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0),
      width = _useState2[0],
      setWidth = _useState2[1];

  var handleResize = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function () {
    if (!hasMounted) return;
    setWidth(window.innerWidth);
  }, [hasMounted]);
  useIsomorphicLayoutEffect(function () {
    if (hasMounted) {
      window.addEventListener("resize", handleResize);
      handleResize();
      return function () {
        return window.removeEventListener("resize", handleResize);
      };
    }
  }, [hasMounted, handleResize]);
  return width;
};

var MasonryResponsive = function MasonryResponsive(_ref) {
  var _ref$columnsCountBrea = _ref.columnsCountBreakPoints,
      columnsCountBreakPoints = _ref$columnsCountBrea === void 0 ? {
    350: 1,
    750: 2,
    900: 3
  } : _ref$columnsCountBrea,
      children = _ref.children,
      _ref$className = _ref.className,
      className = _ref$className === void 0 ? null : _ref$className,
      _ref$style = _ref.style,
      style = _ref$style === void 0 ? null : _ref$style;
  var windowWidth = useWindowWidth();
  var columnsCount = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(function () {
    var breakPoints = Object.keys(columnsCountBreakPoints).sort(function (a, b) {
      return a - b;
    });
    var count = breakPoints.length > 0 ? columnsCountBreakPoints[breakPoints[0]] : DEFAULT_COLUMNS_COUNT;
    breakPoints.forEach(function (breakPoint) {
      if (breakPoint < windowWidth) {
        count = columnsCountBreakPoints[breakPoint];
      }
    });
    return count;
  }, [windowWidth, columnsCountBreakPoints]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: className,
    style: style
  }, react__WEBPACK_IMPORTED_MODULE_0___default().Children.map(children, function (child, index) {
    return react__WEBPACK_IMPORTED_MODULE_0___default().cloneElement(child, {
      key: index,
      columnsCount: columnsCount
    });
  }));
};

MasonryResponsive.propTypes =  true ? {
  children: prop_types__WEBPACK_IMPORTED_MODULE_1___default().oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_1___default().arrayOf((prop_types__WEBPACK_IMPORTED_MODULE_1___default().node)), (prop_types__WEBPACK_IMPORTED_MODULE_1___default().node)]).isRequired,
  columnsCountBreakPoints: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().object),
  className: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string),
  style: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().object)
} : 0;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MasonryResponsive);

/***/ }),

/***/ "./node_modules/react-responsive-masonry/es/index.js":
/*!***********************************************************!*\
  !*** ./node_modules/react-responsive-masonry/es/index.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ResponsiveMasonry: () => (/* reexport safe */ _ResponsiveMasonry__WEBPACK_IMPORTED_MODULE_1__["default"]),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Masonry__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Masonry */ "./node_modules/react-responsive-masonry/es/Masonry/index.js");
/* harmony import */ var _ResponsiveMasonry__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ResponsiveMasonry */ "./node_modules/react-responsive-masonry/es/ResponsiveMasonry/index.js");


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_Masonry__WEBPACK_IMPORTED_MODULE_0__["default"]);


/***/ }),

/***/ "./node_modules/reactjs-popup/dist/reactjs-popup.esm.js":
/*!**************************************************************!*\
  !*** ./node_modules/reactjs-popup/dist/reactjs-popup.esm.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Popup: () => (/* binding */ Popup),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "react-dom");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);



function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

var useOnEscape = function useOnEscape(handler, active) {
  if (active === void 0) {
    active = true;
  }

  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    if (!active) return;

    var listener = function listener(event) {
      // check if key is an Escape
      if (event.key === 'Escape') handler(event);
    };

    document.addEventListener('keyup', listener);
    return function () {
      if (!active) return;
      document.removeEventListener('keyup', listener);
    };
  }, [handler, active]);
};
var useRepositionOnResize = function useRepositionOnResize(handler, active) {
  if (active === void 0) {
    active = true;
  }

  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    if (!active) return;

    var listener = function listener() {
      handler();
    };

    window.addEventListener('resize', listener);
    return function () {
      if (!active) return;
      window.removeEventListener('resize', listener);
    };
  }, [handler, active]);
};
var useOnClickOutside = function useOnClickOutside(ref, handler, active) {
  if (active === void 0) {
    active = true;
  }

  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    if (!active) return;

    var listener = function listener(event) {
      // Do nothing if clicking ref's element or descendent elements
      var refs = Array.isArray(ref) ? ref : [ref];
      var contains = false;
      refs.forEach(function (r) {
        if (!r.current || r.current.contains(event.target)) {
          contains = true;
          return;
        }
      });
      event.stopPropagation();
      if (!contains) handler(event);
    };

    document.addEventListener('mousedown', listener);
    document.addEventListener('touchstart', listener);
    return function () {
      if (!active) return;
      document.removeEventListener('mousedown', listener);
      document.removeEventListener('touchstart', listener);
    };
  }, [ref, handler, active]);
}; // Make sure that user is not able TAB out of the Modal content on Open

var useTabbing = function useTabbing(contentRef, active) {
  if (active === void 0) {
    active = true;
  }

  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    if (!active) return;

    var listener = function listener(event) {
      // check if key is an Tab
      if (event.keyCode === 9) {
        var _contentRef$current;

        var els = contentRef === null || contentRef === void 0 ? void 0 : (_contentRef$current = contentRef.current) === null || _contentRef$current === void 0 ? void 0 : _contentRef$current.querySelectorAll('a[href], area[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), button:not([disabled]), [tabindex="0"]');
        var focusableEls = Array.prototype.slice.call(els);

        if (focusableEls.length === 1) {
          event.preventDefault();
          return;
        }

        var firstFocusableEl = focusableEls[0];
        var lastFocusableEl = focusableEls[focusableEls.length - 1];

        if (event.shiftKey && document.activeElement === firstFocusableEl) {
          event.preventDefault();
          lastFocusableEl.focus();
        } else if (document.activeElement === lastFocusableEl) {
          event.preventDefault();
          firstFocusableEl.focus();
        }
      }
    };

    document.addEventListener('keydown', listener);
    return function () {
      if (!active) return;
      document.removeEventListener('keydown', listener);
    };
  }, [contentRef, active]);
};
var useIsomorphicLayoutEffect = typeof window !== 'undefined' ? react__WEBPACK_IMPORTED_MODULE_0__.useLayoutEffect : react__WEBPACK_IMPORTED_MODULE_0__.useEffect;

var Style = {
  popupContent: {
    tooltip: {
      position: 'absolute',
      zIndex: 999
    },
    modal: {
      position: 'relative',
      margin: 'auto'
    }
  },
  popupArrow: {
    height: '8px',
    width: '16px',
    position: 'absolute',
    background: 'transparent',
    color: '#FFF',
    zIndex: -1
  },
  overlay: {
    tooltip: {
      position: 'fixed',
      top: '0',
      bottom: '0',
      left: '0',
      right: '0',
      zIndex: 999
    },
    modal: {
      position: 'fixed',
      top: '0',
      bottom: '0',
      left: '0',
      right: '0',
      display: 'flex',
      zIndex: 999
    }
  }
};

var POSITION_TYPES = ['top left', 'top center', 'top right', 'right top', 'right center', 'right bottom', 'bottom left', 'bottom center', 'bottom right', 'left top', 'left center', 'left bottom'];

var getCoordinatesForPosition = function getCoordinatesForPosition(triggerBounding, ContentBounding, position, //PopupPosition | PopupPosition[],
arrow, _ref) {
  var offsetX = _ref.offsetX,
      offsetY = _ref.offsetY;
  var margin = arrow ? 8 : 0;
  var args = position.split(' '); // the step N 1 : center the popup content => ok

  var CenterTop = triggerBounding.top + triggerBounding.height / 2;
  var CenterLeft = triggerBounding.left + triggerBounding.width / 2;
  var height = ContentBounding.height,
      width = ContentBounding.width;
  var top = CenterTop - height / 2;
  var left = CenterLeft - width / 2;
  var transform = '';
  var arrowTop = '0%';
  var arrowLeft = '0%'; // the  step N 2 : => ok

  switch (args[0]) {
    case 'top':
      top -= height / 2 + triggerBounding.height / 2 + margin;
      transform = "rotate(180deg)  translateX(50%)";
      arrowTop = '100%';
      arrowLeft = '50%';
      break;

    case 'bottom':
      top += height / 2 + triggerBounding.height / 2 + margin;
      transform = "rotate(0deg) translateY(-100%) translateX(-50%)";
      arrowLeft = '50%';
      break;

    case 'left':
      left -= width / 2 + triggerBounding.width / 2 + margin;
      transform = " rotate(90deg)  translateY(50%) translateX(-25%)";
      arrowLeft = '100%';
      arrowTop = '50%';
      break;

    case 'right':
      left += width / 2 + triggerBounding.width / 2 + margin;
      transform = "rotate(-90deg)  translateY(-150%) translateX(25%)";
      arrowTop = '50%';
      break;
  }

  switch (args[1]) {
    case 'top':
      top = triggerBounding.top;
      arrowTop = triggerBounding.height / 2 + "px";
      break;

    case 'bottom':
      top = triggerBounding.top - height + triggerBounding.height;
      arrowTop = height - triggerBounding.height / 2 + "px";
      break;

    case 'left':
      left = triggerBounding.left;
      arrowLeft = triggerBounding.width / 2 + "px";
      break;

    case 'right':
      left = triggerBounding.left - width + triggerBounding.width;
      arrowLeft = width - triggerBounding.width / 2 + "px";
      break;
  }

  top = args[0] === 'top' ? top - offsetY : top + offsetY;
  left = args[0] === 'left' ? left - offsetX : left + offsetX;
  return {
    top: top,
    left: left,
    transform: transform,
    arrowLeft: arrowLeft,
    arrowTop: arrowTop
  };
};

var getTooltipBoundary = function getTooltipBoundary(keepTooltipInside) {
  // add viewport
  var boundingBox = {
    top: 0,
    left: 0,

    /* eslint-disable-next-line no-undef */
    width: window.innerWidth,

    /* eslint-disable-next-line no-undef */
    height: window.innerHeight
  };

  if (typeof keepTooltipInside === 'string') {
    /* eslint-disable-next-line no-undef */
    var selector = document.querySelector(keepTooltipInside);

    if (true) {
      if (selector === null) throw new Error(keepTooltipInside + " selector does not exist : keepTooltipInside must be a valid html selector 'class' or 'Id'  or a boolean value");
    }

    if (selector !== null) boundingBox = selector.getBoundingClientRect();
  }

  return boundingBox;
};

var calculatePosition = function calculatePosition(triggerBounding, ContentBounding, position, arrow, _ref2, keepTooltipInside) {
  var offsetX = _ref2.offsetX,
      offsetY = _ref2.offsetY;
  var bestCoords = {
    arrowLeft: '0%',
    arrowTop: '0%',
    left: 0,
    top: 0,
    transform: 'rotate(135deg)'
  };
  var i = 0;
  var wrapperBox = getTooltipBoundary(keepTooltipInside);
  var positions = Array.isArray(position) ? position : [position]; // keepTooltipInside would be activated if the  keepTooltipInside exist or the position is Array

  if (keepTooltipInside || Array.isArray(position)) positions = [].concat(positions, POSITION_TYPES); // add viewPort for WarpperBox
  // wrapperBox.top = wrapperBox.top + window.scrollY;
  // wrapperBox.left = wrapperBox.left + window.scrollX;

  while (i < positions.length) {
    bestCoords = getCoordinatesForPosition(triggerBounding, ContentBounding, positions[i], arrow, {
      offsetX: offsetX,
      offsetY: offsetY
    });
    var contentBox = {
      top: bestCoords.top,
      left: bestCoords.left,
      width: ContentBounding.width,
      height: ContentBounding.height
    };

    if (contentBox.top <= wrapperBox.top || contentBox.left <= wrapperBox.left || contentBox.top + contentBox.height >= wrapperBox.top + wrapperBox.height || contentBox.left + contentBox.width >= wrapperBox.left + wrapperBox.width) {
      i++;
    } else {
      break;
    }
  }

  return bestCoords;
};

var popupIdCounter = 0;

var getRootPopup = function getRootPopup() {
  var PopupRoot = document.getElementById('popup-root');

  if (PopupRoot === null) {
    PopupRoot = document.createElement('div');
    PopupRoot.setAttribute('id', 'popup-root');
    document.body.appendChild(PopupRoot);
  }

  return PopupRoot;
};

var Popup = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(function (_ref, ref) {
  var _ref$trigger = _ref.trigger,
      trigger = _ref$trigger === void 0 ? null : _ref$trigger,
      _ref$onOpen = _ref.onOpen,
      onOpen = _ref$onOpen === void 0 ? function () {} : _ref$onOpen,
      _ref$onClose = _ref.onClose,
      onClose = _ref$onClose === void 0 ? function () {} : _ref$onClose,
      _ref$defaultOpen = _ref.defaultOpen,
      defaultOpen = _ref$defaultOpen === void 0 ? false : _ref$defaultOpen,
      _ref$open = _ref.open,
      open = _ref$open === void 0 ? undefined : _ref$open,
      _ref$disabled = _ref.disabled,
      disabled = _ref$disabled === void 0 ? false : _ref$disabled,
      _ref$nested = _ref.nested,
      nested = _ref$nested === void 0 ? false : _ref$nested,
      _ref$closeOnDocumentC = _ref.closeOnDocumentClick,
      closeOnDocumentClick = _ref$closeOnDocumentC === void 0 ? true : _ref$closeOnDocumentC,
      _ref$repositionOnResi = _ref.repositionOnResize,
      repositionOnResize = _ref$repositionOnResi === void 0 ? true : _ref$repositionOnResi,
      _ref$closeOnEscape = _ref.closeOnEscape,
      closeOnEscape = _ref$closeOnEscape === void 0 ? true : _ref$closeOnEscape,
      _ref$on = _ref.on,
      on = _ref$on === void 0 ? ['click'] : _ref$on,
      _ref$contentStyle = _ref.contentStyle,
      contentStyle = _ref$contentStyle === void 0 ? {} : _ref$contentStyle,
      _ref$arrowStyle = _ref.arrowStyle,
      arrowStyle = _ref$arrowStyle === void 0 ? {} : _ref$arrowStyle,
      _ref$overlayStyle = _ref.overlayStyle,
      overlayStyle = _ref$overlayStyle === void 0 ? {} : _ref$overlayStyle,
      _ref$className = _ref.className,
      className = _ref$className === void 0 ? '' : _ref$className,
      _ref$position = _ref.position,
      position = _ref$position === void 0 ? 'bottom center' : _ref$position,
      _ref$modal = _ref.modal,
      modal = _ref$modal === void 0 ? false : _ref$modal,
      _ref$lockScroll = _ref.lockScroll,
      lockScroll = _ref$lockScroll === void 0 ? false : _ref$lockScroll,
      _ref$arrow = _ref.arrow,
      arrow = _ref$arrow === void 0 ? true : _ref$arrow,
      _ref$offsetX = _ref.offsetX,
      offsetX = _ref$offsetX === void 0 ? 0 : _ref$offsetX,
      _ref$offsetY = _ref.offsetY,
      offsetY = _ref$offsetY === void 0 ? 0 : _ref$offsetY,
      _ref$mouseEnterDelay = _ref.mouseEnterDelay,
      mouseEnterDelay = _ref$mouseEnterDelay === void 0 ? 100 : _ref$mouseEnterDelay,
      _ref$mouseLeaveDelay = _ref.mouseLeaveDelay,
      mouseLeaveDelay = _ref$mouseLeaveDelay === void 0 ? 100 : _ref$mouseLeaveDelay,
      _ref$keepTooltipInsid = _ref.keepTooltipInside,
      keepTooltipInside = _ref$keepTooltipInsid === void 0 ? false : _ref$keepTooltipInsid,
      children = _ref.children;

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(open || defaultOpen),
      isOpen = _useState[0],
      setIsOpen = _useState[1];

  var triggerRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  var contentRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  var arrowRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  var focusedElBeforeOpen = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  var popupId = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)("popup-" + ++popupIdCounter);
  var isModal = modal ? true : !trigger;
  var timeOut = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(0);
  useIsomorphicLayoutEffect(function () {
    if (isOpen) {
      focusedElBeforeOpen.current = document.activeElement;
      setPosition();
      focusContentOnOpen(); // for accessibility

      lockScrolll();
    } else {
      resetScroll();
    }

    return function () {
      clearTimeout(timeOut.current);
    };
  }, [isOpen]); // for uncontrolled popup we need to sync isOpen with open prop

  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    if (typeof open === 'boolean') {
      if (open) openPopup();else closePopup();
    }
  }, [open, disabled]);

  var openPopup = function openPopup(event) {
    if (isOpen || disabled) return;
    setIsOpen(true);
    setTimeout(function () {
      return onOpen(event);
    }, 0);
  };

  var closePopup = function closePopup(event) {
    var _focusedElBeforeOpen$;

    if (!isOpen || disabled) return;
    setIsOpen(false);
    if (isModal) (_focusedElBeforeOpen$ = focusedElBeforeOpen.current) === null || _focusedElBeforeOpen$ === void 0 ? void 0 : _focusedElBeforeOpen$.focus();
    setTimeout(function () {
      return onClose(event);
    }, 0);
  };

  var togglePopup = function togglePopup(event) {
    event === null || event === void 0 ? void 0 : event.stopPropagation();
    if (!isOpen) openPopup(event);else closePopup(event);
  };

  var onMouseEnter = function onMouseEnter(event) {
    clearTimeout(timeOut.current);
    timeOut.current = setTimeout(function () {
      return openPopup(event);
    }, mouseEnterDelay);
  };

  var onContextMenu = function onContextMenu(event) {
    event === null || event === void 0 ? void 0 : event.preventDefault();
    togglePopup();
  };

  var onMouseLeave = function onMouseLeave(event) {
    clearTimeout(timeOut.current);
    timeOut.current = setTimeout(function () {
      return closePopup(event);
    }, mouseLeaveDelay);
  };

  var lockScrolll = function lockScrolll() {
    if (isModal && lockScroll) document.getElementsByTagName('body')[0].style.overflow = 'hidden'; // migrate to document.body
  };

  var resetScroll = function resetScroll() {
    if (isModal && lockScroll) document.getElementsByTagName('body')[0].style.overflow = 'auto';
  };

  var focusContentOnOpen = function focusContentOnOpen() {
    var _contentRef$current;

    var focusableEls = contentRef === null || contentRef === void 0 ? void 0 : (_contentRef$current = contentRef.current) === null || _contentRef$current === void 0 ? void 0 : _contentRef$current.querySelectorAll('a[href], area[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), button:not([disabled]), [tabindex="0"]');
    var firstEl = Array.prototype.slice.call(focusableEls)[0];
    firstEl === null || firstEl === void 0 ? void 0 : firstEl.focus();
  };

  (0,react__WEBPACK_IMPORTED_MODULE_0__.useImperativeHandle)(ref, function () {
    return {
      open: function open() {
        openPopup();
      },
      close: function close() {
        closePopup();
      },
      toggle: function toggle() {
        togglePopup();
      }
    };
  }); // set Position

  var setPosition = function setPosition() {
    if (isModal || !isOpen) return;
    if (!(triggerRef === null || triggerRef === void 0 ? void 0 : triggerRef.current) || !(triggerRef === null || triggerRef === void 0 ? void 0 : triggerRef.current) || !(contentRef === null || contentRef === void 0 ? void 0 : contentRef.current)) return; /// show error as one of ref is undefined

    var trigger = triggerRef.current.getBoundingClientRect();
    var content = contentRef.current.getBoundingClientRect();
    var cords = calculatePosition(trigger, content, position, arrow, {
      offsetX: offsetX,
      offsetY: offsetY
    }, keepTooltipInside);
    contentRef.current.style.top = cords.top + window.scrollY + "px";
    contentRef.current.style.left = cords.left + window.scrollX + "px";

    if (arrow && !!arrowRef.current) {
      var _arrowStyle$top, _arrowStyle$left;

      arrowRef.current.style.transform = cords.transform;
      arrowRef.current.style.setProperty('-ms-transform', cords.transform);
      arrowRef.current.style.setProperty('-webkit-transform', cords.transform);
      arrowRef.current.style.top = ((_arrowStyle$top = arrowStyle.top) === null || _arrowStyle$top === void 0 ? void 0 : _arrowStyle$top.toString()) || cords.arrowTop;
      arrowRef.current.style.left = ((_arrowStyle$left = arrowStyle.left) === null || _arrowStyle$left === void 0 ? void 0 : _arrowStyle$left.toString()) || cords.arrowLeft;
    }
  }; // hooks


  useOnEscape(closePopup, closeOnEscape); // can be optimized if we disabled for hover

  useTabbing(contentRef, isOpen && isModal);
  useRepositionOnResize(setPosition, repositionOnResize);
  useOnClickOutside(!!trigger ? [contentRef, triggerRef] : [contentRef], closePopup, closeOnDocumentClick && !nested); // we need to add a ne
  // render the trigger element and add events

  var renderTrigger = function renderTrigger() {
    var triggerProps = {
      key: 'T',
      ref: triggerRef,
      'aria-describedby': popupId.current
    };
    var onAsArray = Array.isArray(on) ? on : [on];

    for (var i = 0, len = onAsArray.length; i < len; i++) {
      switch (onAsArray[i]) {
        case 'click':
          triggerProps.onClick = togglePopup;
          break;

        case 'right-click':
          triggerProps.onContextMenu = onContextMenu;
          break;

        case 'hover':
          triggerProps.onMouseEnter = onMouseEnter;
          triggerProps.onMouseLeave = onMouseLeave;
          break;

        case 'focus':
          triggerProps.onFocus = onMouseEnter;
          triggerProps.onBlur = onMouseLeave;
          break;
      }
    }

    if (typeof trigger === 'function') {
      var comp = trigger(isOpen);
      return !!trigger && react__WEBPACK_IMPORTED_MODULE_0___default().cloneElement(comp, triggerProps);
    }

    return !!trigger && react__WEBPACK_IMPORTED_MODULE_0___default().cloneElement(trigger, triggerProps);
  };

  var addWarperAction = function addWarperAction() {
    var popupContentStyle = isModal ? Style.popupContent.modal : Style.popupContent.tooltip;
    var childrenElementProps = {
      className: "popup-content " + (className !== '' ? className.split(' ').map(function (c) {
        return c + "-content";
      }).join(' ') : ''),
      style: _extends({}, popupContentStyle, contentStyle, {
        pointerEvents: 'auto'
      }),
      ref: contentRef,
      onClick: function onClick(e) {
        e.stopPropagation();
      }
    };

    if (!modal && on.indexOf('hover') >= 0) {
      childrenElementProps.onMouseEnter = onMouseEnter;
      childrenElementProps.onMouseLeave = onMouseLeave;
    }

    return childrenElementProps;
  };

  var renderContent = function renderContent() {
    return react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", Object.assign({}, addWarperAction(), {
      key: "C",
      role: isModal ? 'dialog' : 'tooltip',
      id: popupId.current
    }), arrow && !isModal && react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      ref: arrowRef,
      style: Style.popupArrow
    }, react__WEBPACK_IMPORTED_MODULE_0___default().createElement("svg", {
      "data-testid": "arrow",
      className: "popup-arrow " + (className !== '' ? className.split(' ').map(function (c) {
        return c + "-arrow";
      }).join(' ') : ''),
      viewBox: "0 0 32 16",
      style: _extends({
        position: 'absolute'
      }, arrowStyle)
    }, react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", {
      d: "M16 0l16 16H0z",
      fill: "currentcolor"
    }))), children && typeof children === 'function' ? children(closePopup, isOpen) : children);
  };

  var overlay = !(on.indexOf('hover') >= 0);
  var ovStyle = isModal ? Style.overlay.modal : Style.overlay.tooltip;
  var content = [overlay && react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    key: "O",
    "data-testid": "overlay",
    "data-popup": isModal ? 'modal' : 'tooltip',
    className: "popup-overlay " + (className !== '' ? className.split(' ').map(function (c) {
      return c + "-overlay";
    }).join(' ') : ''),
    style: _extends({}, ovStyle, overlayStyle, {
      pointerEvents: closeOnDocumentClick && nested || isModal ? 'auto' : 'none'
    }),
    onClick: closeOnDocumentClick && nested ? closePopup : undefined,
    tabIndex: -1
  }, isModal && renderContent()), !isModal && renderContent()];
  return react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, renderTrigger(), isOpen && react_dom__WEBPACK_IMPORTED_MODULE_1___default().createPortal(content, getRootPopup()));
});

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Popup);

//# sourceMappingURL=reactjs-popup.esm.js.map


/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "React" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = window["React"];

/***/ }),

/***/ "react-dom":
/*!***************************!*\
  !*** external "ReactDOM" ***!
  \***************************/
/***/ ((module) => {

"use strict";
module.exports = window["ReactDOM"];

/***/ }),

/***/ "@wordpress/block-editor":
/*!*************************************!*\
  !*** external ["wp","blockEditor"] ***!
  \*************************************/
/***/ ((module) => {

"use strict";
module.exports = window["wp"]["blockEditor"];

/***/ }),

/***/ "@wordpress/blocks":
/*!********************************!*\
  !*** external ["wp","blocks"] ***!
  \********************************/
/***/ ((module) => {

"use strict";
module.exports = window["wp"]["blocks"];

/***/ }),

/***/ "@wordpress/components":
/*!************************************!*\
  !*** external ["wp","components"] ***!
  \************************************/
/***/ ((module) => {

"use strict";
module.exports = window["wp"]["components"];

/***/ }),

/***/ "@wordpress/compose":
/*!*********************************!*\
  !*** external ["wp","compose"] ***!
  \*********************************/
/***/ ((module) => {

"use strict";
module.exports = window["wp"]["compose"];

/***/ }),

/***/ "@wordpress/data":
/*!******************************!*\
  !*** external ["wp","data"] ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = window["wp"]["data"];

/***/ }),

/***/ "@wordpress/edit-post":
/*!**********************************!*\
  !*** external ["wp","editPost"] ***!
  \**********************************/
/***/ ((module) => {

"use strict";
module.exports = window["wp"]["editPost"];

/***/ }),

/***/ "@wordpress/element":
/*!*********************************!*\
  !*** external ["wp","element"] ***!
  \*********************************/
/***/ ((module) => {

"use strict";
module.exports = window["wp"]["element"];

/***/ }),

/***/ "@wordpress/hooks":
/*!*******************************!*\
  !*** external ["wp","hooks"] ***!
  \*******************************/
/***/ ((module) => {

"use strict";
module.exports = window["wp"]["hooks"];

/***/ }),

/***/ "@wordpress/i18n":
/*!******************************!*\
  !*** external ["wp","i18n"] ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = window["wp"]["i18n"];

/***/ }),

/***/ "@wordpress/plugins":
/*!*********************************!*\
  !*** external ["wp","plugins"] ***!
  \*********************************/
/***/ ((module) => {

"use strict";
module.exports = window["wp"]["plugins"];

/***/ }),

/***/ "./node_modules/classnames/index.js":
/*!******************************************!*\
  !*** ./node_modules/classnames/index.js ***!
  \******************************************/
/***/ ((module, exports) => {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/
/* global define */

(function () {
	'use strict';

	var hasOwn = {}.hasOwnProperty;

	function classNames () {
		var classes = '';

		for (var i = 0; i < arguments.length; i++) {
			var arg = arguments[i];
			if (arg) {
				classes = appendClass(classes, parseValue(arg));
			}
		}

		return classes;
	}

	function parseValue (arg) {
		if (typeof arg === 'string' || typeof arg === 'number') {
			return arg;
		}

		if (typeof arg !== 'object') {
			return '';
		}

		if (Array.isArray(arg)) {
			return classNames.apply(null, arg);
		}

		if (arg.toString !== Object.prototype.toString && !arg.toString.toString().includes('[native code]')) {
			return arg.toString();
		}

		var classes = '';

		for (var key in arg) {
			if (hasOwn.call(arg, key) && arg[key]) {
				classes = appendClass(classes, key);
			}
		}

		return classes;
	}

	function appendClass (value, newClass) {
		if (!newClass) {
			return value;
		}
	
		if (value) {
			return value + ' ' + newClass;
		}
	
		return value + newClass;
	}

	if ( true && module.exports) {
		classNames.default = classNames;
		module.exports = classNames;
	} else if (true) {
		// register as 'classnames', consistent with npm package name
		!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = (function () {
			return classNames;
		}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	} else {}
}());


/***/ }),

/***/ "./src/blocks/section/block.json":
/*!***************************************!*\
  !*** ./src/blocks/section/block.json ***!
  \***************************************/
/***/ ((module) => {

"use strict";
module.exports = /*#__PURE__*/JSON.parse('{"$schema":"https://schemas.wp.org/trunk/block.json","apiVersion":3,"name":"wc-booster/section","keywords":["section","group"],"version":"3.1.1","title":"Section","category":"wc-booster","description":"This block enables you to add a section with a desired layout that allows you to add other block within it.","supports":{"html":false},"attributes":{"block_id":{"type":"string"},"padding":{"type":"object","default":{"activeUnit":"px","units":["px","em"],"isLinkActive":true,"range":{"min":10,"max":300},"values":{"desktop":[15,15,15,15],"tablet":[15,15,15,15],"mobile":[15,15,15,15]}}},"margin":{"type":"object","default":{"activeUnit":"px","units":["px","em"],"isLinkActive":true,"range":{"min":10,"max":300},"values":{"desktop":[0,0,0,0],"tablet":[0,0,0,0],"mobile":[0,0,0,0]}}},"containerType":{"type":"string","default":"boxed"},"containerWidth":{"type":"object","default":{"activeUnit":"px","units":["px"],"range":{"min":1,"max":2000},"values":{"desktop":1140,"tablet":720,"mobile":540}}},"bgType":{"type":"string","default":"image"},"bgImage":{"type":"object"},"bgVideo":{"type":"object"},"bgPosition":{"type":"string","default":"left top"},"bgColor":{"type":"string"},"bgAttachment":{"type":"boolean","default":false},"bgOverlay":{"type":"string"},"enableShapeDivider":{"type":"boolean","default":false},"verticalFlip":{"type":"boolean","default":true},"horizontalFlip":{"type":"boolean","default":false},"shapeColor":{"type":"string","default":"#000000"},"shapeHeight":{"type":"object","default":{"activeUnit":"px","units":["px"],"range":{"min":1,"max":2000},"values":{"desktop":1140,"tablet":720,"mobile":540}}},"shape":{"type":"string","default":"hills"},"shapeBgColor":{"type":"string"},"shapePosition":{"type":"string","default":"bottom"},"shapeZIndex":{"type":"numeric","default":0}},"example":{"name":"wc-booster/section","attributes":{"padding":{"activeUnit":"px","isLinkActive":false,"properties":["top","right","bottom","left"],"responsiveViews":["desktop","tablet","mobile"],"units":["px","em"],"range":{"min":10,"max":300},"values":{"desktop":[100,15,100,50],"tablet":[15,15,15,15],"mobile":[15,15,15,15]}},"margin":{"activeUnit":"px","units":["px","em"],"isLinkActive":true,"range":{"min":10,"max":300},"values":{"desktop":[0,0,0,0],"tablet":[0,0,0,0],"mobile":[0,0,0,0]}},"containerType":"boxed","containerWidth":{"activeUnit":"px","units":["px"],"range":{"min":1,"max":2000},"values":{"desktop":1140,"tablet":720,"mobile":540}},"bgType":"color","bgPosition":"left top","bgAttachment":false,"enableShapeDivider":true,"verticalFlip":true,"horizontalFlip":false,"shapeColor":"#000000","shapeHeight":{"activeUnit":"px","range":{"min":1,"max":2000},"values":{"desktop":181,"tablet":720,"mobile":540},"units":["px"]},"shape":"waves","shapePosition":"bottom","shapeZIndex":0,"shapeBgColor":"#eeeeee","bgColor":"#eeeeee"},"innerBlocks":[],"viewportWidth":800},"textdomain":"wc-booster","editorScript":"file:./index.js","editorStyle":"file:./index.css","style":"file:./style-index.css"}');

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			loaded: false,
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/node module decorator */
/******/ 	(() => {
/******/ 		__webpack_require__.nmd = (module) => {
/******/ 			module.paths = [];
/******/ 			if (!module.children) module.children = [];
/******/ 			return module;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"blocks/section/index": 0,
/******/ 			"blocks/section/style-index": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = globalThis["webpackChunkwc_booster"] = globalThis["webpackChunkwc_booster"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["blocks/section/style-index"], () => (__webpack_require__("./src/blocks/section/index.js")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=index.js.map