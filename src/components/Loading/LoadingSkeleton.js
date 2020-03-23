import React, { Component } from "react";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";

class LoadingSkeleton extends Component {

    render() {
      return (
        <SkeletonTheme className="text-center" color="#dee2e6" highlightColor="#f8f9fa">
            <Skeleton count={4} width='100%'/>
            <Skeleton count={1} width='50%'/>
        </SkeletonTheme>
      );
  }
}
export default LoadingSkeleton;
