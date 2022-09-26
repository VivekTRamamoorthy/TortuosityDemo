# [Tortuosity Demo](https://VivekTRamamoorthy.github.io/TortuosityDemo)
An interactive demo to understand the concept of tortuosity in porous materials.

Click on the title to go to the webpage featuring the app.
## Theory
Tortuosity of a path is a measure of how deviant the path is from a straight line.
If the path travelled is a straight line, the tortuosity is 1, and higher if the path is tortuous.
Higher the tortuosity, less straight the path is.


In the context of porous materials, the high frequency limit of tortuosity corresponds to the cumulative deviation of the
fluid acoustic velocity from the bulk fluid motion given by the following expression:

$$ \alpha_{\infty} = \frac{\displaystyle{\frac{1}{V}\int_{V}v^{2}dV}} {\left( \displaystyle{\frac{1}{V}\int_{V}\vec{v}dV} \right)^{2}} $$

Here, $v$ is the velocity of the fluid particle, and $V$ is the volume.
This demo is complementary to the [JCAL](https://apmr.matelys.com/PropagationModels/MotionlessSkeleton/JohnsonChampouxAllardLafargeModel.html) and
              [Tortuosity](https://apmr.matelys.com/Parameters/HFLimitOfTortuosity.html) webpages at apmr.matelys.com.

For paths, the equation can be rewritten as:

$$ \text{Tortuosity of a path} = \frac{\displaystyle{\frac{1}{L}\int_{L}|dL|^{2}dL}}{\left| \displaystyle{\frac{1}{L}\int_{L}\vec{dL}dL} \right|^{2}} $$


Here, $dL$ corresponds to the length of a small element of the path, $L$ is the total unwrapped length of the path, and | $\cdot$ | is the vector magnitude operator.
For the programming implementation, the mouse move is traced and the integrals are converted to sums as follows:

$$ \text{Tortuosity of a path} = \frac{\displaystyle{\frac{1}{L}\sum_{path}|dL|^{2}dL}}
{\left| \displaystyle{\frac{1}{L}\sum_{path}\vec{dL}dL} \right|^{2}} $$


## License
MIT  2022 Vivek T Ramamoorthy




